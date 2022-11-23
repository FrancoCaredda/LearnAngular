export class Medicine {
    constructor(private name: string, private type: string, private price: number) {}

    public setName(name: string): void {
        this.name = name;
    }

    public setType(type: string): void {
        this.type = type;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public getName(): string {
        return this.name;
    }

    public getType(): string {
        return this.type;
    }

    public getPrice() {
        return this.price;
    }
}