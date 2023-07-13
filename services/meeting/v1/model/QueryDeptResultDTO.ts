import { IdMarkDTO } from './IdMarkDTO';


export class QueryDeptResultDTO {
    public deptCode?: string;
    public deptLevel?: number;
    public deptName?: string;
    public deptNamePath?: string;
    public isLeafNode?: boolean;
    public parentDeptCode?: string;
    public deptCodePath?: string;
    public note?: string;
    public corpId?: string;
    public inPermission?: string;
    public outPermission?: string;
    public designatedOutDeptCodes?: Array<IdMarkDTO>;
    public sortLevel?: number;
    public constructor() { 
    }
    public withDeptCode(deptCode: string): QueryDeptResultDTO {
        this['deptCode'] = deptCode;
        return this;
    }
    public withDeptLevel(deptLevel: number): QueryDeptResultDTO {
        this['deptLevel'] = deptLevel;
        return this;
    }
    public withDeptName(deptName: string): QueryDeptResultDTO {
        this['deptName'] = deptName;
        return this;
    }
    public withDeptNamePath(deptNamePath: string): QueryDeptResultDTO {
        this['deptNamePath'] = deptNamePath;
        return this;
    }
    public withIsLeafNode(isLeafNode: boolean): QueryDeptResultDTO {
        this['isLeafNode'] = isLeafNode;
        return this;
    }
    public withParentDeptCode(parentDeptCode: string): QueryDeptResultDTO {
        this['parentDeptCode'] = parentDeptCode;
        return this;
    }
    public withDeptCodePath(deptCodePath: string): QueryDeptResultDTO {
        this['deptCodePath'] = deptCodePath;
        return this;
    }
    public withNote(note: string): QueryDeptResultDTO {
        this['note'] = note;
        return this;
    }
    public withCorpId(corpId: string): QueryDeptResultDTO {
        this['corpId'] = corpId;
        return this;
    }
    public withInPermission(inPermission: string): QueryDeptResultDTO {
        this['inPermission'] = inPermission;
        return this;
    }
    public withOutPermission(outPermission: string): QueryDeptResultDTO {
        this['outPermission'] = outPermission;
        return this;
    }
    public withDesignatedOutDeptCodes(designatedOutDeptCodes: Array<IdMarkDTO>): QueryDeptResultDTO {
        this['designatedOutDeptCodes'] = designatedOutDeptCodes;
        return this;
    }
    public withSortLevel(sortLevel: number): QueryDeptResultDTO {
        this['sortLevel'] = sortLevel;
        return this;
    }
}