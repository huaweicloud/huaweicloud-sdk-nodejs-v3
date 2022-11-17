

export class LinksItem {
    private 'file_name'?: string | undefined;
    public link?: string;
    public constructor() { 
    }
    public withFileName(fileName: string): LinksItem {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName() {
        return this['file_name'];
    }
    public withLink(link: string): LinksItem {
        this['link'] = link;
        return this;
    }
}