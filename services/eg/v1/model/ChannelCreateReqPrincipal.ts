

export class ChannelCreateReqPrincipal {
    private 'IAM'?: Array<string>;
    public constructor() { 
    }
    public withIam(iam: Array<string>): ChannelCreateReqPrincipal {
        this['IAM'] = iam;
        return this;
    }
    public set iam(iam: Array<string>  | undefined) {
        this['IAM'] = iam;
    }
    public get iam(): Array<string> | undefined {
        return this['IAM'];
    }
}