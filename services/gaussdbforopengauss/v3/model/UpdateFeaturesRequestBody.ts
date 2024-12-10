

export class UpdateFeaturesRequestBody {
    public params?: object;
    public constructor(params?: object) { 
        this['params'] = params;
    }
    public withParams(params: object): UpdateFeaturesRequestBody {
        this['params'] = params;
        return this;
    }
}