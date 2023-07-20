

export class DedicatedStorageInfo {
    private 'spec_code'?: string;
    private 'host_num'?: number;
    public constructor(specCode?: string, hostNum?: number) { 
        this['spec_code'] = specCode;
        this['host_num'] = hostNum;
    }
    public withSpecCode(specCode: string): DedicatedStorageInfo {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withHostNum(hostNum: number): DedicatedStorageInfo {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
}