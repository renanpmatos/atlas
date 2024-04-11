import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-5">
          <Button variant="default" size="sm">
            Teste
          </Button>
          <Button variant="default" size="md">
            Teste
          </Button>
          <Button variant="default" size="lg">
            Teste
          </Button>
        </div>
        <div className="flex flex-row gap-5">
          <Button variant="light" size="sm">
            Teste
          </Button>
          <Button variant="light" size="md">
            Teste
          </Button>
          <Button variant="light" size="lg">
            Teste
          </Button>
        </div>
        <div className="flex flex-row gap-5">
          <Button variant="ghost" size="sm">
            Teste
          </Button>
          <Button variant="ghost" size="md">
            Teste
          </Button>
          <Button variant="ghost" size="lg">
            Teste
          </Button>
        </div>
        <div className="flex flex-row gap-5">
          <Button variant="outline" size="sm">
            Teste
          </Button>
          <Button variant="outline" size="md">
            Teste
          </Button>
          <Button variant="outline" size="lg">
            Teste
          </Button>
        </div>
        <div className="flex flex-row gap-5">
          <Button variant="link" size="sm">
            Teste
          </Button>
          <Button variant="link" size="md">
            Teste
          </Button>
          <Button variant="link" size="lg">
            Teste
          </Button>
        </div>
        <div className="flex flex-row gap-5">
          <Button variant="shadow" size="sm">
            Teste
          </Button>
          <Button variant="shadow" size="md">
            Teste
          </Button>
          <Button variant="shadow" size="lg">
            Teste
          </Button>
        </div>
      </div>
    </div>
  );
}
