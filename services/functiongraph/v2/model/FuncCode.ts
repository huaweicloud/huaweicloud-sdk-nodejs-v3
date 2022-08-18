

export class FuncCode {
    public file: string;
    public link: string;
    public constructor(file?: any, link?: any) { 
        this['file'] = file;
        this['link'] = link;
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