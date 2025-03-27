

export class EventResponseExecuteOptions {
    public device?: string;
    public wwn?: string;
    private 'serial_number'?: string;
    private 'resize_target_flavor_id'?: string;
    private 'migrate_policy'?: string;
    public executor?: string;
    public constructor() { 
    }
    public withDevice(device: string): EventResponseExecuteOptions {
        this['device'] = device;
        return this;
    }
    public withWwn(wwn: string): EventResponseExecuteOptions {
        this['wwn'] = wwn;
        return this;
    }
    public withSerialNumber(serialNumber: string): EventResponseExecuteOptions {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: string  | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber(): string | undefined {
        return this['serial_number'];
    }
    public withResizeTargetFlavorId(resizeTargetFlavorId: string): EventResponseExecuteOptions {
        this['resize_target_flavor_id'] = resizeTargetFlavorId;
        return this;
    }
    public set resizeTargetFlavorId(resizeTargetFlavorId: string  | undefined) {
        this['resize_target_flavor_id'] = resizeTargetFlavorId;
    }
    public get resizeTargetFlavorId(): string | undefined {
        return this['resize_target_flavor_id'];
    }
    public withMigratePolicy(migratePolicy: string): EventResponseExecuteOptions {
        this['migrate_policy'] = migratePolicy;
        return this;
    }
    public set migratePolicy(migratePolicy: string  | undefined) {
        this['migrate_policy'] = migratePolicy;
    }
    public get migratePolicy(): string | undefined {
        return this['migrate_policy'];
    }
    public withExecutor(executor: string): EventResponseExecuteOptions {
        this['executor'] = executor;
        return this;
    }
}