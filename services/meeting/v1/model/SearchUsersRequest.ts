

export class SearchUsersRequest {
    private 'X-Request-Id'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    public offset?: number;
    public limit?: number;
    public searchKey?: string;
    public sortField?: string;
    public isAsc?: boolean;
    public deptCode?: string;
    public enableSubDept?: boolean;
    public adminType?: SearchUsersRequestAdminTypeEnum;
    public enableRoom?: boolean;
    public userType?: Array<number>;
    public status?: number;
    public containsUnActive?: boolean;
    public constructor() { 
    }
    public withXRequestId(xRequestId: string): SearchUsersRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): SearchUsersRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withOffset(offset: number): SearchUsersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchUsersRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearchKey(searchKey: string): SearchUsersRequest {
        this['searchKey'] = searchKey;
        return this;
    }
    public withSortField(sortField: string): SearchUsersRequest {
        this['sortField'] = sortField;
        return this;
    }
    public withIsAsc(isAsc: boolean): SearchUsersRequest {
        this['isAsc'] = isAsc;
        return this;
    }
    public withDeptCode(deptCode: string): SearchUsersRequest {
        this['deptCode'] = deptCode;
        return this;
    }
    public withEnableSubDept(enableSubDept: boolean): SearchUsersRequest {
        this['enableSubDept'] = enableSubDept;
        return this;
    }
    public withAdminType(adminType: SearchUsersRequestAdminTypeEnum): SearchUsersRequest {
        this['adminType'] = adminType;
        return this;
    }
    public withEnableRoom(enableRoom: boolean): SearchUsersRequest {
        this['enableRoom'] = enableRoom;
        return this;
    }
    public withUserType(userType: Array<number>): SearchUsersRequest {
        this['userType'] = userType;
        return this;
    }
    public withStatus(status: number): SearchUsersRequest {
        this['status'] = status;
        return this;
    }
    public withContainsUnActive(containsUnActive: boolean): SearchUsersRequest {
        this['containsUnActive'] = containsUnActive;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchUsersRequestAdminTypeEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
