import { Card } from "./Card";

export default function CardCollection() {
  return (
    <div className="mt-3 grid gap-3 pt-3 text-center md:grid-cols-3 lg:w-2/3">
      <Card
        name="One"
        description="Style 1"
        documentation="https://nextjs.org/"
      />
      <Card
        name="Two"
        description="Style 2"
        documentation="https://www.typescriptlang.org/"
      />
      <Card
        name="Three"
        description="Style 3"
        documentation="https://tailwindcss.com/"
      />
    </div>
  );
}
