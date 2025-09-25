
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutoKillTransactionConfigResponse extends SdkResponse {
    public type?: string;
    public usernames?: Array<string>;
    public threshold?: number;
    private 'auto_stop'?: boolean;
    private 'database_names'?: Array<string>;
    private 'database_names_select'?: Array<string>;
    public constructor() { 
        super();
    }
    public withType(type: string): ShowAutoKillTransactionConfigResponse {
        this['type'] = type;
        return this;
    }
    public withUsernames(usernames: Array<string>): ShowAutoKillTransactionConfigResponse {
        this['usernames'] = usernames;
        return this;
    }
    public withThreshold(threshold: number): ShowAutoKillTransactionConfigResponse {
        this['threshold'] = threshold;
        return this;
    }
    public withAutoStop(autoStop: boolean): ShowAutoKillTransactionConfigResponse {
        this['auto_stop'] = autoStop;
        return this;
    }
    public set autoStop(autoStop: boolean  | undefined) {
        this['auto_stop'] = autoStop;
    }
    public get autoStop(): boolean | undefined {
        return this['auto_stop'];
    }
    public withDatabaseNames(databaseNames: Array<string>): ShowAutoKillTransactionConfigResponse {
        this['database_names'] = databaseNames;
        return this;
    }
    public set databaseNames(databaseNames: Array<string>  | undefined) {
        this['database_names'] = databaseNames;
    }
    public get databaseNames(): Array<string> | undefined {
        return this['database_names'];
    }
    public withDatabaseNamesSelect(databaseNamesSelect: Array<string>): ShowAutoKillTransactionConfigResponse {
        this['database_names_select'] = databaseNamesSelect;
        return this;
    }
    public set databaseNamesSelect(databaseNamesSelect: Array<string>  | undefined) {
        this['database_names_select'] = databaseNamesSelect;
    }
    public get databaseNamesSelect(): Array<string> | undefined {
        return this['database_names_select'];
    }
}