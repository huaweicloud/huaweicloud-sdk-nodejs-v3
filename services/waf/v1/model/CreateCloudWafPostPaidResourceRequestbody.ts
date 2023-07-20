

export class CreateCloudWafPostPaidResourceRequestbody {
    private 'console_area'?: string;
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
}