

export class VdiDisconnectHibernateOptions {
    private 'disconnect_hibernate_minutes'?: number;
    public constructor() { 
    }
    public withDisconnectHibernateMinutes(disconnectHibernateMinutes: number): VdiDisconnectHibernateOptions {
        this['disconnect_hibernate_minutes'] = disconnectHibernateMinutes;
        return this;
    }
    public set disconnectHibernateMinutes(disconnectHibernateMinutes: number  | undefined) {
        this['disconnect_hibernate_minutes'] = disconnectHibernateMinutes;
    }
    public get disconnectHibernateMinutes(): number | undefined {
        return this['disconnect_hibernate_minutes'];
    }
}