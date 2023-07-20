import { StructProcessVO } from './StructProcessVO';


export class StructProcessResp {
    private 'create_time'?: string;
    public result?: Array<StructProcessVO>;
    public constructor() { 
    }
    public withCreateTime(createTime: string): StructProcessResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withResult(result: Array<StructProcessVO>): StructProcessResp {
        this['result'] = result;
        return this;
    }
}