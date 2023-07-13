

export class CreateConnectorReq {
    public specification?: CreateConnectorReqSpecificationEnum;
    private 'node_cnt'?: string | undefined;
    private 'spec_code': string | undefined;
    public constructor(specCode?: any) { 
        this['spec_code'] = specCode;
    }
    public withSpecification(specification: CreateConnectorReqSpecificationEnum): CreateConnectorReq {
        this['specification'] = specification;
        return this;
    }
    public withNodeCnt(nodeCnt: string): CreateConnectorReq {
        this['node_cnt'] = nodeCnt;
        return this;
    }
    public set nodeCnt(nodeCnt: string | undefined) {
        this['node_cnt'] = nodeCnt;
    }
    public get nodeCnt() {
        return this['node_cnt'];
    }
    public withSpecCode(specCode: string): CreateConnectorReq {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode() {
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
