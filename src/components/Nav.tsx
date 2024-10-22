import { css } from "@emotion/css";
import { useState } from "react";
import { Button, Drawer, Menu } from "antd";
import type { MenuProps } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

const Nav = () => {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const items: MenuItem[] = [
    {
      key: "/",
      label: "Home",
      onClick: () => navigate("/"),
    },
    {
      key: "/scan",
      label: "Scan",
      onClick: () => navigate("/scan"),
    },
    {
      key: "/add",
      label: "Add",
      onClick: () => navigate("/add"),
    },
  ];
  return (
    <>
      <nav
        className={css`
          //   background: red;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100% !impotant;
          height: 4rem;
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
          padding: 0 3rem;
        `}
      >
        <div></div>
        <Button onClick={showDrawer} icon={<MenuOutlined />} />
      </nav>
      <Drawer
        title="Menu"
        onClose={onClose}
        open={open}
        className={css`
          .ant-drawer-body {
            padding: 0;
          }
        `}
        footer={
          <a
            className={css`
              padding-left: 24px;
            `}
          >
            LogIn/LogOut
          </a>
        }
      >
        <Menu
          defaultSelectedKeys={["/"]}
          defaultOpenKeys={["/"]}
          selectedKeys={[pathname]}
          mode="inline"
          items={items}
          className={css`
            margin: 0;
          `}
        />
      </Drawer>
    </>
  );
};

export default Nav;
