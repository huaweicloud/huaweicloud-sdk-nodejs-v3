

export class CreateCloudWafPostPaidResourceRequestbody {
    private 'console_area'?: string;
    private 'postpaid_name'?: string;
    private 'extend_params'?: object;
    public constructor(consoleArea?: string) { 
        this['console_area'] = consoleArea;
    }
    public withConsoleArea(consoleArea: string): CreateCloudWafPostPaidResourceRequestbody {
        this['console_area'] = consoleArea;
        return this;
    }
    public set consoleArea(consoleArea: string  | undefined) {
        this['console_area'] = consoleArea;
    }
    public get consoleArea(): string | undefined {
        return this['console_area'];
    }
    public withPostpaidName(postpaidName: string): CreateCloudWafPostPaidResourceRequestbody {
        this['postpaid_name'] = postpaidName;
        return this;
    }
    public set postpaidName(postpaidName: string  | undefined) {
        this['postpaid_name'] = postpaidName;
    }
    public get postpaidName(): string | undefined {
        return this['postpaid_name'];
    }
    public withExtendParams(extendParams: object): CreateCloudWafPostPaidResourceRequestbody {
        this['extend_params'] = extendParams;
        return this;
    }
    public set extendParams(extendParams: object  | undefined) {
        this['extend_params'] = extendParams;
    }
    public get extendParams(): object | undefined {
        return this['extend_params'];
    }
}