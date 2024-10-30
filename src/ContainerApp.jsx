import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Sider, Content } = Layout;

const ContainerApp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const items = [
    {
      key: "/",
      label: "Product",
    },
    {
      key: "cashier-menu",
      label: "Kasir",
      children: [
        {
          key: "/cashier",
          label: "Product",
        },
        {
          key: "/cashier/cart",
          label: "Keranjang",
        },
      ],
    },
  ];

  const getOpenFirst = () => {
    const filterItems = items.filter(
      (e) => location.pathname.split("/")[1] === e.key.split("-")[0]
    );
    return filterItems?.[0]?.key || "";
  };

  return (
    <Layout>
      <Sider className="bg-white">
        <Menu
          defaultSelectedKeys={[location.pathname]}
          defaultOpenKeys={[getOpenFirst()]}
          onClick={(e) => {
            navigate(e.key);
          }}
          mode="inline"
          items={items}
        />
      </Sider>
      <Content className="p-4">
        <Outlet />
      </Content>
    </Layout>
  );
};
export default ContainerApp;
