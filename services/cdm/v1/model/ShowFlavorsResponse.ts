import { CdmClusterDatastoreVersion } from './CdmClusterDatastoreVersion';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFlavorsResponse extends SdkResponse {
    public id?: string;
    public dbname?: string;
    public versions?: Array<CdmClusterDatastoreVersion>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowFlavorsResponse {
        this['id'] = id;
        return this;
    }
    public withDbname(dbname: string): ShowFlavorsResponse {
        this['dbname'] = dbname;
        return this;
    }
    public withVersions(versions: Array<CdmClusterDatastoreVersion>): ShowFlavorsResponse {
        this['versions'] = versions;
        return this;
    }
}