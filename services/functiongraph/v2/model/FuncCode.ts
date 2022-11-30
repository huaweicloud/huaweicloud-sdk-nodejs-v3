

export class FuncCode {
    public file?: string;
    public link?: string;
    public constructor() { 
    }
    public withFile(file: string): FuncCode {
        this['file'] = file;
        return this;
    }
    public withLink(link: string): FuncCode {
        this['link'] = link;
        return this;
    }
}