import { Input, InputElement, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
  return (
    <InputGroup flex="1" startElement={<LuSearch />}>
      <Input
        borderRadius={20}
        placeholder="Search games..."
        variant="outline"
      />
    </InputGroup>
  );
};

export default SearchInput;
