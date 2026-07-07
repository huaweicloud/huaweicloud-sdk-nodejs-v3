

export class ShowAnalysisSessionResultRespTopStateDuration {
    private 'session_id'?: string;
    public user?: string;
    public host?: string;
    private 'database_name'?: string;
    private 'execution_status'?: string;
    public command?: string;
    private 'sql_statement'?: string;
    private 'state_duration'?: string;
    private 'transaction_duration'?: string;
    private 'transaction_id'?: string;
    private 'transaction_lock_wait_time'?: string;
    private 'transaction_status'?: string;
    private 'rows_locked_by_transactions'?: string;
    private 'tables_locked_by_transactions'?: string;
    private 'rows_updated_by_transactions'?: string;
    public constructor(sessionId?: string, user?: string, host?: string, databaseName?: string, executionStatus?: string, command?: string, sqlStatement?: string, stateDuration?: string, transactionDuration?: string, transactionId?: string, transactionLockWaitTime?: string, transactionStatus?: string, rowsLockedByTransactions?: string, tablesLockedByTransactions?: string, rowsUpdatedByTransactions?: string) { 
        this['session_id'] = sessionId;
        this['user'] = user;
        this['host'] = host;
        this['database_name'] = databaseName;
        this['execution_status'] = executionStatus;
        this['command'] = command;
        this['sql_statement'] = sqlStatement;
        this['state_duration'] = stateDuration;
        this['transaction_duration'] = transactionDuration;
        this['transaction_id'] = transactionId;
        this['transaction_lock_wait_time'] = transactionLockWaitTime;
        this['transaction_status'] = transactionStatus;
        this['rows_locked_by_transactions'] = rowsLockedByTransactions;
        this['tables_locked_by_transactions'] = tablesLockedByTransactions;
        this['rows_updated_by_transactions'] = rowsUpdatedByTransactions;
    }
    public withSessionId(sessionId: string): ShowAnalysisSessionResultRespTopStateDuration {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: string  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): string | undefined {
        return this['session_id'];
    }
    public withUser(user: string): ShowAnalysisSessionResultRespTopStateDuration {
        this['user'] = user;
        return this;
    }
    public withHost(host: string): ShowAnalysisSessionResultRespTopStateDuration {
        this['host'] = host;
        return this;
    }
    public withDatabaseName(databaseName: string): ShowAnalysisSessionResultRespTopStateDuration {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withExecutionStatus(executionStatus: string): ShowAnalysisSessionResultRespTopStateDuration {
        this['execution_status'] = executionStatus;
        return this;
    }
    public set executionStatus(executionStatus: string  | undefined) {
        this['execution_status'] = executionStatus;
    }
    public get executionStatus(): string | undefined {
        return this['execution_status'];
    }
    public withCommand(command: string): ShowAnalysisSessionResultRespTopStateDuration {
        this['command'] = command;
        return this;
    }
    public withSqlStatement(sqlStatement: string): ShowAnalysisSessionResultRespTopStateDuration {
        this['sql_statement'] = sqlStatement;
        return this;
    }
    public set sqlStatement(sqlStatement: string  | undefined) {
        this['sql_statement'] = sqlStatement;
    }
    public get sqlStatement(): string | undefined {
        return this['sql_statement'];
    }
    public withStateDuration(stateDuration: string): ShowAnalysisSessionResultRespTopStateDuration {
        this['state_duration'] = stateDuration;
        return this;
    }
    public set stateDuration(stateDuration: string  | undefined) {
        this['state_duration'] = stateDuration;
    }
    public get stateDuration(): string | undefined {
        return this['state_duration'];
    }
    public withTransactionDuration(transactionDuration: string): ShowAnalysisSessionResultRespTopStateDuration {
        this['transaction_duration'] = transactionDuration;
        return this;
    }
    public set transactionDuration(transactionDuration: string  | undefined) {
        this['transaction_duration'] = transactionDuration;
    }
    public get transactionDuration(): string | undefined {
        return this['transaction_duration'];
    }
    public withTransactionId(transactionId: string): ShowAnalysisSessionResultRespTopStateDuration {
        this['transaction_id'] = transactionId;
        return this;
    }
    public set transactionId(transactionId: string  | undefined) {
        this['transaction_id'] = transactionId;
    }
    public get transactionId(): string | undefined {
        return this['transaction_id'];
    }
    public withTransactionLockWaitTime(transactionLockWaitTime: string): ShowAnalysisSessionResultRespTopStateDuration {
        this['transaction_lock_wait_time'] = transactionLockWaitTime;
        return this;
    }
    public set transactionLockWaitTime(transactionLockWaitTime: string  | undefined) {
        this['transaction_lock_wait_time'] = transactionLockWaitTime;
    }
    public get transactionLockWaitTime(): string | undefined {
        return this['transaction_lock_wait_time'];
    }
    public withTransactionStatus(transactionStatus: string): ShowAnalysisSessionResultRespTopStateDuration {
        this['transaction_status'] = transactionStatus;
        return this;
    }
    public set transactionStatus(transactionStatus: string  | undefined) {
        this['transaction_status'] = transactionStatus;
    }
    public get transactionStatus(): string | undefined {
        return this['transaction_status'];
    }
    public withRowsLockedByTransactions(rowsLockedByTransactions: string): ShowAnalysisSessionResultRespTopStateDuration {
        this['rows_locked_by_transactions'] = rowsLockedByTransactions;
        return this;
    }
    public set rowsLockedByTransactions(rowsLockedByTransactions: string  | undefined) {
        this['rows_locked_by_transactions'] = rowsLockedByTransactions;
    }
    public get rowsLockedByTransactions(): string | undefined {
        return this['rows_locked_by_transactions'];
    }
    public withTablesLockedByTransactions(tablesLockedByTransactions: string): ShowAnalysisSessionResultRespTopStateDuration {
        this['tables_locked_by_transactions'] = tablesLockedByTransactions;
        return this;
    }
    public set tablesLockedByTransactions(tablesLockedByTransactions: string  | undefined) {
        this['tables_locked_by_transactions'] = tablesLockedByTransactions;
    }
    public get tablesLockedByTransactions(): string | undefined {
        return this['tables_locked_by_transactions'];
    }
    public withRowsUpdatedByTransactions(rowsUpdatedByTransactions: string): ShowAnalysisSessionResultRespTopStateDuration {
        this['rows_updated_by_transactions'] = rowsUpdatedByTransactions;
        return this;
    }
    public set rowsUpdatedByTransactions(rowsUpdatedByTransactions: string  | undefined) {
        this['rows_updated_by_transactions'] = rowsUpdatedByTransactions;
    }
    public get rowsUpdatedByTransactions(): string | undefined {
        return this['rows_updated_by_transactions'];
    }
}