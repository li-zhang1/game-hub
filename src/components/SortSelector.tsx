import { Button, Menu, Portal } from "@chakra-ui/react";
const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger>
        <Button variant="outline" size="sm">
          Order By: Relevance
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item> Relevance</Menu.Item>
            <Menu.Item> Data added</Menu.Item>
            <Menu.Item> Name</Menu.Item>
            <Menu.Item> Release data</Menu.Item>
            <Menu.Item> Popularity</Menu.Item>
            <Menu.Item> Average rating</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
