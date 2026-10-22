

export class SecurityReportContentResponseReportContentInfoDocCountItems {
    public key?: string;
    private 'doc_count'?: number;
    public constructor() { 
    }
    public withKey(key: string): SecurityReportContentResponseReportContentInfoDocCountItems {
        this['key'] = key;
        return this;
    }
    public withDocCount(docCount: number): SecurityReportContentResponseReportContentInfoDocCountItems {
        this['doc_count'] = docCount;
        return this;
    }
    public set docCount(docCount: number  | undefined) {
        this['doc_count'] = docCount;
    }
    public get docCount(): number | undefined {
        return this['doc_count'];
    }
}