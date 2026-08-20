

export class CreateConnectorReq {
    public specification?: CreateConnectorReqSpecificationEnum | string;
    private 'node_cnt'?: number;
    private 'spec_code'?: string;
    public constructor() { 
    }
    public withSpecification(specification: CreateConnectorReqSpecificationEnum | string): CreateConnectorReq {
        this['specification'] = specification;
        return this;
    }
    public withNodeCnt(nodeCnt: number): CreateConnectorReq {
        this['node_cnt'] = nodeCnt;
        return this;
    }
    public set nodeCnt(nodeCnt: number  | undefined) {
        this['node_cnt'] = nodeCnt;
    }
    public get nodeCnt(): number | undefined {
        return this['node_cnt'];
    }
    public withSpecCode(specCode: string): CreateConnectorReq {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateConnectorReqSpecificationEnum {
    E_100MB = '100MB',
    E_300MB = '300MB',
    E_600MB = '600MB',
    E_1200MB = '1200MB'
}
