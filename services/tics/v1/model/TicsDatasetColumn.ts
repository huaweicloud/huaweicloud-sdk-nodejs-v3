

export class TicsDatasetColumn {
    private 'column_name'?: string;
    public comments?: string;
    private 'data_id'?: string;
    private 'data_type'?: string;
    private 'fl_label_type'?: TicsDatasetColumnFlLabelTypeEnum | string;
    private 'is_discrete'?: boolean;
    public length?: number;
    private 'privacy_policy'?: TicsDatasetColumnPrivacyPolicyEnum | string;
    private 'privacy_policy_ext'?: string;
    public sacle?: number;
    private 'sql_col_privacy_type'?: TicsDatasetColumnSqlColPrivacyTypeEnum | string;
    public constructor() { 
    }
    public withColumnName(columnName: string): TicsDatasetColumn {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withComments(comments: string): TicsDatasetColumn {
        this['comments'] = comments;
        return this;
    }
    public withDataId(dataId: string): TicsDatasetColumn {
        this['data_id'] = dataId;
        return this;
    }
    public set dataId(dataId: string  | undefined) {
        this['data_id'] = dataId;
    }
    public get dataId(): string | undefined {
        return this['data_id'];
    }
    public withDataType(dataType: string): TicsDatasetColumn {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withFlLabelType(flLabelType: TicsDatasetColumnFlLabelTypeEnum | string): TicsDatasetColumn {
        this['fl_label_type'] = flLabelType;
        return this;
    }
    public set flLabelType(flLabelType: TicsDatasetColumnFlLabelTypeEnum | string  | undefined) {
        this['fl_label_type'] = flLabelType;
    }
    public get flLabelType(): TicsDatasetColumnFlLabelTypeEnum | string | undefined {
        return this['fl_label_type'];
    }
    public withIsDiscrete(isDiscrete: boolean): TicsDatasetColumn {
        this['is_discrete'] = isDiscrete;
        return this;
    }
    public set isDiscrete(isDiscrete: boolean  | undefined) {
        this['is_discrete'] = isDiscrete;
    }
    public get isDiscrete(): boolean | undefined {
        return this['is_discrete'];
    }
    public withLength(length: number): TicsDatasetColumn {
        this['length'] = length;
        return this;
    }
    public withPrivacyPolicy(privacyPolicy: TicsDatasetColumnPrivacyPolicyEnum | string): TicsDatasetColumn {
        this['privacy_policy'] = privacyPolicy;
        return this;
    }
    public set privacyPolicy(privacyPolicy: TicsDatasetColumnPrivacyPolicyEnum | string  | undefined) {
        this['privacy_policy'] = privacyPolicy;
    }
    public get privacyPolicy(): TicsDatasetColumnPrivacyPolicyEnum | string | undefined {
        return this['privacy_policy'];
    }
    public withPrivacyPolicyExt(privacyPolicyExt: string): TicsDatasetColumn {
        this['privacy_policy_ext'] = privacyPolicyExt;
        return this;
    }
    public set privacyPolicyExt(privacyPolicyExt: string  | undefined) {
        this['privacy_policy_ext'] = privacyPolicyExt;
    }
    public get privacyPolicyExt(): string | undefined {
        return this['privacy_policy_ext'];
    }
    public withSacle(sacle: number): TicsDatasetColumn {
        this['sacle'] = sacle;
        return this;
    }
    public withSqlColPrivacyType(sqlColPrivacyType: TicsDatasetColumnSqlColPrivacyTypeEnum | string): TicsDatasetColumn {
        this['sql_col_privacy_type'] = sqlColPrivacyType;
        return this;
    }
    public set sqlColPrivacyType(sqlColPrivacyType: TicsDatasetColumnSqlColPrivacyTypeEnum | string  | undefined) {
        this['sql_col_privacy_type'] = sqlColPrivacyType;
    }
    public get sqlColPrivacyType(): TicsDatasetColumnSqlColPrivacyTypeEnum | string | undefined {
        return this['sql_col_privacy_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TicsDatasetColumnFlLabelTypeEnum {
    FEATURE = 'FEATURE',
    FILTER = 'FILTER',
    LABEL = 'LABEL',
    UNIQUE_ID = 'UNIQUE_ID'
}
/**
    * @export
    * @enum {string}
    */
export enum TicsDatasetColumnPrivacyPolicyEnum {
    HASH = 'HASH',
    MASK = 'MASK',
    NONE = 'NONE'
}
/**
    * @export
    * @enum {string}
    */
export enum TicsDatasetColumnSqlColPrivacyTypeEnum {
    NON_SENSITIVE = 'NON_SENSITIVE',
    SENSITIVE = 'SENSITIVE',
    UNIQUE_ID = 'UNIQUE_ID'
}
