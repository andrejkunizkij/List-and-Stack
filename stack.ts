export class Stack<T> {

    private name: string;
    private array: Array<any>;

    constructor(name: string) {
        this.array = [];
        this.name = name;
    }

    public push(value: T): void {
        this.array.push(value);
    }

   
    public pop(): T {
        return this.array.pop();
    }

    
    public size(): number {
        return this.array.length;
    }

    public equals(value: any): boolean {
        return this.hashCode() === value.hashCode();
    }

   
    public hashCode(): number {
        let hash: number = 0, chr: number,
            arrayString: string = this.toString();

        if(!arrayString.length) {
            return hash;
        }

        for (let i = 0; i < arrayString.length; i++) {
            chr   = arrayString.charCodeAt(i);
            hash  = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }

   
    public toString(): string {
        let str: string = '';

       this.array.forEach((el, i) => {
            if (el.toString() === '[object Object]') {
                str += JSON.stringify(el);
            } else {
                str += el.toString();
            }
       })
       return str;
    }
}