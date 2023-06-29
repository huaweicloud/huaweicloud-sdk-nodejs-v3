import { ChildDeptDTO } from './ChildDeptDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDepartmentResponse extends SdkResponse {
    public deptCode?: string;
    public deptName?: string;
    public isLeafNodes?: boolean;
    public childDepts?: Array<ChildDeptDTO>;
    public constructor() { 
        super();
    }
    public withDeptCode(deptCode: string): ShowDepartmentResponse {
        this['deptCode'] = deptCode;
        return this;
    }
    public withDeptName(deptName: string): ShowDepartmentResponse {
        this['deptName'] = deptName;
        return this;
    }
    public withIsLeafNodes(isLeafNodes: boolean): ShowDepartmentResponse {
        this['isLeafNodes'] = isLeafNodes;
        return this;
    }
    public withChildDepts(childDepts: Array<ChildDeptDTO>): ShowDepartmentResponse {
        this['childDepts'] = childDepts;
        return this;
    }
}