import { Metric } from './Metric';


export class UserMetric {
    public username?: string;
    public metric?: Array<Metric>;
    public constructor() { 
    }
    public withUsername(username: string): UserMetric {
        this['username'] = username;
        return this;
    }
    public withMetric(metric: Array<Metric>): UserMetric {
        this['metric'] = metric;
        return this;
    }
}