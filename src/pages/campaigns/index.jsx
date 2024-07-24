import React from "react";
import PrimaryWrapper from "../../components/PrimaryWrapper";
import {
  Button,
  Flex,
  Pagination,
  // Popconfirm,
  Row,
  Table,
  Typography,
} from "antd";
// import { useDeleteOrganizationMutation } from "../../../redux/services/organizations";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import { useGetAllCampaignQuery } from "../../redux/services/campaignApi";
import moment from "moment";

const DeviceLinkRequest = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  const { data, isLoading } = useGetAllCampaignQuery();
  const columns = [
    {
      dataIndex: "id",
      title: "ID",
      width: 40,
      // render: (record, item, index) => index + 1,
    },
    {
      dataIndex: "campaign_name",
      title: "Campaign Name",
      width: 200,
      sortable: false,
      render: (record, item) => {
        return <Link to={`/campaigns/${item?.id}/edit`}>{record}</Link>;
      },
    },
    {
      dataIndex: "location",
      title: "Location",
      width: 150,
      sortable: false,
    },
    {
      dataIndex: "minimum_amount",
      title: "Min Amount",
      // type: "number",
      width: 110,
      sortable: false,
    },
    {
      dataIndex: "event",
      title: "Event",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      dataIndex: "created_at",
      title: "Created At",
      // type: "number",
      width: 150,
      sortable: false,
      render: (record) => moment(record).calendar(),
    },
  ];

  const onChange = (page) => {
    setSearchParams(
      (prev) => {
        prev.set("page", page);
        return prev;
      },
      { replace: true }
    );
  };

  return (
    <PrimaryWrapper>
      <Row justify={"space-between"} gutter={[0, 0]} align="middle">
        <Typography.Title level={2}>Campaigns</Typography.Title>
        <Button
          size="middle"
          type="primary"
          onClick={() => navigate(`/campaigns/create`)}
        >
          Create
        </Button>
      </Row>
      <Table
        columns={columns}
        dataSource={data?.campaigns || []}
        loading={isLoading}
        onChange={onChange}
        pagination={false}
      />
      <Flex justify="right" style={{ marginTop: "20px" }}>
        <Pagination
          defaultCurrent={1}
          total={data?.count}
          pageSize={10}
          showSizeChanger={false}
          onChange={onChange}
          current={+page}
          hideOnSinglePage={true}
        />
      </Flex>
    </PrimaryWrapper>
  );
};

export default DeviceLinkRequest;
