import { IdMarkDTO } from './IdMarkDTO';
import { QueryDeptResultDTO } from './QueryDeptResultDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDeptAndChildDeptResponse extends SdkResponse {
    public corpId?: string;
    public deptCode?: string;
    public deptLevel?: number;
    public deptName?: string;
    public deptNamePath?: string;
    public isLeafNode?: boolean;
    public parentDeptCode?: string;
    public deptCodePath?: string;
    public note?: string;
    public inPermission?: string;
    public outPermission?: string;
    public designatedOutDeptCodes?: Array<IdMarkDTO>;
    public childDepts?: Array<QueryDeptResultDTO>;
    public sortLevel?: number;
    public constructor() { 
        super();
    }
    public withCorpId(corpId: string): ShowDeptAndChildDeptResponse {
        this['corpId'] = corpId;
        return this;
    }
    public withDeptCode(deptCode: string): ShowDeptAndChildDeptResponse {
        this['deptCode'] = deptCode;
        return this;
    }
    public withDeptLevel(deptLevel: number): ShowDeptAndChildDeptResponse {
        this['deptLevel'] = deptLevel;
        return this;
    }
    public withDeptName(deptName: string): ShowDeptAndChildDeptResponse {
        this['deptName'] = deptName;
        return this;
    }
    public withDeptNamePath(deptNamePath: string): ShowDeptAndChildDeptResponse {
        this['deptNamePath'] = deptNamePath;
        return this;
    }
    public withIsLeafNode(isLeafNode: boolean): ShowDeptAndChildDeptResponse {
        this['isLeafNode'] = isLeafNode;
        return this;
    }
    public withParentDeptCode(parentDeptCode: string): ShowDeptAndChildDeptResponse {
        this['parentDeptCode'] = parentDeptCode;
        return this;
    }
    public withDeptCodePath(deptCodePath: string): ShowDeptAndChildDeptResponse {
        this['deptCodePath'] = deptCodePath;
        return this;
    }
    public withNote(note: string): ShowDeptAndChildDeptResponse {
        this['note'] = note;
        return this;
    }
    public withInPermission(inPermission: string): ShowDeptAndChildDeptResponse {
        this['inPermission'] = inPermission;
        return this;
    }
    public withOutPermission(outPermission: string): ShowDeptAndChildDeptResponse {
        this['outPermission'] = outPermission;
        return this;
    }
    public withDesignatedOutDeptCodes(designatedOutDeptCodes: Array<IdMarkDTO>): ShowDeptAndChildDeptResponse {
        this['designatedOutDeptCodes'] = designatedOutDeptCodes;
        return this;
    }
    public withChildDepts(childDepts: Array<QueryDeptResultDTO>): ShowDeptAndChildDeptResponse {
        this['childDepts'] = childDepts;
        return this;
    }
    public withSortLevel(sortLevel: number): ShowDeptAndChildDeptResponse {
        this['sortLevel'] = sortLevel;
        return this;
    }
}