import { DeleteOutlined, EditTwoTone } from "@ant-design/icons";
import {
  Button,
  Flex,
  Pagination,
  Popconfirm,
  Row,
  Space,
  Table,
  Typography,
} from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";

import PrimaryWrapper from "../../components/PrimaryWrapper";
import { useGetAllEnquiriesQuery } from "../../redux/services/campaignApi";

const Users = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  const { data, isLoading: loadingUsers } = useGetAllEnquiriesQuery({ page });

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      render: (record, item, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "number",
    },
    {
      title: "Purpose",
      dataIndex: "purpose",
    },
    {
      title: "Trust",
      dataIndex: "trust",
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
        <Typography.Title level={2}>Enquiries</Typography.Title>
      </Row>
      <Table
        columns={columns}
        dataSource={data || []}
        loading={loadingUsers}
        onChange={onChange}
        pagination={false}
      />
      <Flex justify="center">
        <Pagination
          defaultCurrent={1}
          total={data?.count}
          pageSize={50}
          showSizeChanger={false}
          onChange={onChange}
          current={+page}
          hideOnSinglePage={true}
        />
      </Flex>
    </PrimaryWrapper>
  );
};
export default Users;
