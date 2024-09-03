import { Container } from "./components/Container";
import { Card, CardTop, CardBottom } from "./components/Card";
import { Text } from "./components/Text";
import { Button } from "./components/Button";

export function Component() {
  return (
      <Container background="#966f6f" padding="5">
        <Card background="#ffffff" padding="3">
          <CardTop>
            <Text text="Title" fontSize="20"></Text>
            <Text text="Subtitle" fontSize="15"></Text>
          </CardTop>
          <CardBottom>
            <Button size="small" variant="contained" color="primary" text="Click me">Learn more</Button>
          </CardBottom>
        </Card>
        <Button size="small" variant="outlined" color="primary" text="Click me">Click</Button>
        <Text text="Hi world!" fontSize="20" size="small"></Text>
        <Container background="#999" padding="2">
          <Text text="It's me again!" fontSize="20" size="small"></Text>
        </Container>
      </Container>
  );
}