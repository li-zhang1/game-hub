import { Button, Menu, Portal } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger>
        <Button variant="outline" size="sm">
          Platforms
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <Menu.Item>{platform.name}</Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
