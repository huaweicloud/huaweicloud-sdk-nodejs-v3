

export class VdiNoOperationHibernateOptions {
    private 'no_operation_hibernate_minutes'?: number;
    public constructor() { 
    }
    public withNoOperationHibernateMinutes(noOperationHibernateMinutes: number): VdiNoOperationHibernateOptions {
        this['no_operation_hibernate_minutes'] = noOperationHibernateMinutes;
        return this;
    }
    public set noOperationHibernateMinutes(noOperationHibernateMinutes: number  | undefined) {
        this['no_operation_hibernate_minutes'] = noOperationHibernateMinutes;
    }
    public get noOperationHibernateMinutes(): number | undefined {
        return this['no_operation_hibernate_minutes'];
    }
}