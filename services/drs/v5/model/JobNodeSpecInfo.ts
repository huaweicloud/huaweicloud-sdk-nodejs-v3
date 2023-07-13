

export class JobNodeSpecInfo {
    private 'node_type': JobNodeSpecInfoNodeTypeEnum | undefined;
    public constructor(nodeType?: any) { 
        this['node_type'] = nodeType;
    }
    public withNodeType(nodeType: JobNodeSpecInfoNodeTypeEnum): JobNodeSpecInfo {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: JobNodeSpecInfoNodeTypeEnum | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType() {
        return this['node_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobNodeSpecInfoNodeTypeEnum {
    MICRO = 'micro',
    SMALL = 'small',
    MEDIUM = 'medium',
    HIGH = 'high'
}
