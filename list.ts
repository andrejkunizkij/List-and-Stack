 export class LinkedList<T> {

    private element: T[] = [];
    private value: number = 0;

    public add(arg: T): void{
        this.element[this.value] = arg;
        this.value++;
    }

    public remove(index: number){
        delete this.element[index];
    }

    public get(index: number): T {
        return this.element[index];
    }

    public size():number{
        return this.element.length;
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
            hash |= 0; 
        }
        return hash;
    }

   
