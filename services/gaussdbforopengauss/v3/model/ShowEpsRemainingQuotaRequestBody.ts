

export class ShowEpsRemainingQuotaRequestBody {
    private 'eps_tags'?: Array<string>;
    public constructor(epsTags?: Array<string>) { 
        this['eps_tags'] = epsTags;
    }
    public withEpsTags(epsTags: Array<string>): ShowEpsRemainingQuotaRequestBody {
        this['eps_tags'] = epsTags;
        return this;
    }
    public set epsTags(epsTags: Array<string>  | undefined) {
        this['eps_tags'] = epsTags;
    }
    public get epsTags(): Array<string> | undefined {
        return this['eps_tags'];
    }
}