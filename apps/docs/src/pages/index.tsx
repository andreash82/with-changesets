import { Button } from "@example/core";
import  "@example/core/dist/index.css"
import { useIsomorphicLayoutEffect } from "@example/utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("Acme docs page");
  }, []);
  return (
    <div>
      <h1>Acme Documentation</h1>
      <Button>Click me</Button>
    </div>
  );
}
