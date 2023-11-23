import { DriverManagement } from './DriverManagement';


export class ConnectionManagement {
    private 'driver_management'?: DriverManagement;
    public constructor() { 
    }
    public withDriverManagement(driverManagement: DriverManagement): ConnectionManagement {
        this['driver_management'] = driverManagement;
        return this;
    }
    public set driverManagement(driverManagement: DriverManagement  | undefined) {
        this['driver_management'] = driverManagement;
    }
    public get driverManagement(): DriverManagement | undefined {
        return this['driver_management'];
    }
}