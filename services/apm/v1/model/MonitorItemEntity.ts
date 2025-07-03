

export class MonitorItemEntity {
    private 'category_id'?: number;
    private 'collector_name'?: string;
    private 'display_name'?: string;
    private 'show_in_total'?: boolean;
    private 'monitor_item_id'?: number;
    public disabled?: boolean;
    private 'collector_id'?: number;
    public sequence?: number;
    private 'collect_interval'?: number;
    public constructor() { 
    }
    public withCategoryId(categoryId: number): MonitorItemEntity {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: number  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): number | undefined {
        return this['category_id'];
    }
    public withCollectorName(collectorName: string): MonitorItemEntity {
        this['collector_name'] = collectorName;
        return this;
    }
    public set collectorName(collectorName: string  | undefined) {
        this['collector_name'] = collectorName;
    }
    public get collectorName(): string | undefined {
        return this['collector_name'];
    }
    public withDisplayName(displayName: string): MonitorItemEntity {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withShowInTotal(showInTotal: boolean): MonitorItemEntity {
        this['show_in_total'] = showInTotal;
        return this;
    }
    public set showInTotal(showInTotal: boolean  | undefined) {
        this['show_in_total'] = showInTotal;
    }
    public get showInTotal(): boolean | undefined {
        return this['show_in_total'];
    }
    public withMonitorItemId(monitorItemId: number): MonitorItemEntity {
        this['monitor_item_id'] = monitorItemId;
        return this;
    }
    public set monitorItemId(monitorItemId: number  | undefined) {
        this['monitor_item_id'] = monitorItemId;
    }
    public get monitorItemId(): number | undefined {
        return this['monitor_item_id'];
    }
    public withDisabled(disabled: boolean): MonitorItemEntity {
        this['disabled'] = disabled;
        return this;
    }
    public withCollectorId(collectorId: number): MonitorItemEntity {
        this['collector_id'] = collectorId;
        return this;
    }
    public set collectorId(collectorId: number  | undefined) {
        this['collector_id'] = collectorId;
    }
    public get collectorId(): number | undefined {
        return this['collector_id'];
    }
    public withSequence(sequence: number): MonitorItemEntity {
        this['sequence'] = sequence;
        return this;
    }
    public withCollectInterval(collectInterval: number): MonitorItemEntity {
        this['collect_interval'] = collectInterval;
        return this;
    }
    public set collectInterval(collectInterval: number  | undefined) {
        this['collect_interval'] = collectInterval;
    }
    public get collectInterval(): number | undefined {
        return this['collect_interval'];
    }
}