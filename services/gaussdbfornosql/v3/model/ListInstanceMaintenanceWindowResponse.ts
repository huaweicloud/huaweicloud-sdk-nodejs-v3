
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceMaintenanceWindowResponse extends SdkResponse {
    private 'maintenance_window'?: string;
    public constructor() { 
        super();
    }
    public withMaintenanceWindow(maintenanceWindow: string): ListInstanceMaintenanceWindowResponse {
        this['maintenance_window'] = maintenanceWindow;
        return this;
    }
    public set maintenanceWindow(maintenanceWindow: string  | undefined) {
        this['maintenance_window'] = maintenanceWindow;
    }
    public get maintenanceWindow(): string | undefined {
        return this['maintenance_window'];
    }
}