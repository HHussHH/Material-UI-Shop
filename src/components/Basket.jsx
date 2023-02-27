import { ShoppingBasket } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import BasketItem from "./BasketItem";

const Basket = ({
  cartOpen,
  closeCart = Function.prototype,
  order = [],
  removeFromOrder,
}) => {
  return (
    <Drawer anchor="right" open={cartOpen} onClose={closeCart}>
      <List sx={{ width: 290 }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary="Корзина" />
        </ListItem>
        <Divider />
        {!order.length ? (
          <ListItem>Корзина пуста!</ListItem>
        ) : (
          <>
            {order.map((item) => (
              <BasketItem
                key={item.name}
                removeFromOrder={removeFromOrder}
                {...item}
              />
            ))}
            <ListItem>
              <Typography sx={{ fontWeight: 700 }}>
                Общая стоимость:{" "}
                {order.reduce((acc, item) => {
                  return acc + item.price * item.quantity;
                }, 0)}{" "}
                рублей.
              </Typography>
            </ListItem>
            <Divider />
          </>
        )}
      </List>
    </Drawer>
  );
};

export default Basket;
