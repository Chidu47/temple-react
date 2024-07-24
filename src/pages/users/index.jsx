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

import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from "../../redux/services/users";
import PrimaryWrapper from "../../components/PrimaryWrapper";

const Users = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  const { data, isLoading: loadingUsers } = useGetUsersQuery({ page });
  const [deleteUser, { isLoading: deletingUser }] = useDeleteUserMutation();

  const columns = [
    {
      title: "Name",
      dataIndex: "full_name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Organization",
      dataIndex: "organization",
      render: (org) => <>{org?.name}</>,
    },
    {
      title: "Action",
      key: "id",
      fixed: "right",
      width: 100,
      render: (user, { id }) => (
        <Space>
          <Button
            icon={<EditTwoTone />}
            onClick={() => navigate(`/users/edit/${id}`)}
          />
          <Popconfirm
            title="Are you sure to delete this User?"
            onConfirm={() => deleteUser(id)}
            okText="Yes"
            okButtonProps={{ loading: deletingUser }}
            placement="topLeft"
            cancelText="No"
          >
            <Button
              icon={<DeleteOutlined />}
              danger
              disabled={user?.is_superuser}
            />
          </Popconfirm>
        </Space>
      ),
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
        <Typography.Title level={2}>Users</Typography.Title>
        <Button
          size="middle"
          type="primary"
          onClick={() => navigate(`/users/create`)}
        >
          Create User
        </Button>
      </Row>
      <Table
        columns={columns}
        dataSource={data?.results || []}
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
