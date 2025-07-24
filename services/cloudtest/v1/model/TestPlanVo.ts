

export class TestPlanVo {
    public uri?: string;
    public name?: string;
    public constructor() { 
    }
    public withUri(uri: string): TestPlanVo {
        this['uri'] = uri;
        return this;
    }
    public withName(name: string): TestPlanVo {
        this['name'] = name;
        return this;
    }
}