import { ISchema, DataType, IType, Schema, QueryResult, nil, FunctionDefinition, IEquivalentType, QueryInterceptor, ISubscription, OperatorDefinition, QueryOrAst } from '../interfaces';
import { _IDb, _ISchema, _Transaction, _ITable, _SelectExplanation, IValue, _IType, _IRelation, QueryObjOpts, _ISequence, RegClass, Reg, TypeQuery, BeingCreated, _FunctionDefinition, _OperatorDefinition } from '../interfaces-private';
import { DropFunctionStatement, BinaryOperator, QName, DataTypeDef, CreateSequenceOptions, CreateExtensionStatement } from 'pgsql-ast-parser';
import { MemoryTable } from '../table';
import { IMigrate } from '../migrate/migrate-interfaces';
export declare class DbSchema implements _ISchema, ISchema {
    readonly name: string;
    readonly db: _IDb;
    readonly dualTable: _ITable;
    private relsByNameCas;
    private relsByCls;
    private relsByTyp;
    private _tables;
    private fns;
    private ops;
    private installedExtensions;
    private readonly;
    private interceptors;
    private lastSelect?;
    constructor(name: string, db: _IDb);
    setReadonly(): this;
    none(query: QueryOrAst): void;
    one(query: QueryOrAst): any;
    many(query: QueryOrAst): any[];
    query(text: QueryOrAst): QueryResult;
    private parse;
    queries(query: QueryOrAst): Iterable<QueryResult>;
    registerEnum(name: string, values: string[]): void;
    getThisOrSiblingFor(name: QName): _ISchema;
    private simpleTypes;
    private sizeableTypes;
    parseType(native: string): _IType;
    getOwnType(t: DataTypeDef): _IType | null;
    getTypePub(t: DataType | IType): _IType;
    getType(t: TypeQuery): _IType;
    getObject(p: QName): _IRelation;
    getObject(p: QName, opts: BeingCreated): _IRelation;
    getObject(p: QName, opts?: QueryObjOpts): _IRelation | null;
    getOwnObject(name: string): _IRelation | null;
    getObjectByRegOrName(reg: RegClass): _IRelation;
    getObjectByRegOrName(reg: RegClass, opts?: QueryObjOpts): _IRelation | null;
    getObjectByRegClassId(reg: number): _IRelation;
    getObjectByRegClassId(reg: number, opts?: QueryObjOpts): _IRelation | null;
    getOwnObjectByRegClassId(reg: number): _IRelation | null;
    createSequence(t: _Transaction, opts: CreateSequenceOptions | nil, _name: QName | nil): _ISequence;
    explainLastSelect(): _SelectExplanation | undefined;
    explainSelect(sql: string): _SelectExplanation;
    executeCreateExtension(p: CreateExtensionStatement): void;
    getTable(name: string): _ITable;
    getTable(name: string, nullIfNotFound?: boolean): _ITable | null;
    declareTable(table: Schema, noSchemaChange?: boolean): MemoryTable;
    registerEquivalentType(type: IEquivalentType): IType;
    _registerTypeSizeable(name: string, ctor: (sz?: number) => _IType): this;
    _registerType(type: _IType): this;
    _unregisterType(type: _IType): this;
    _reg_register(rel: _IRelation): Reg;
    _reg_unregister(rel: _IRelation): void;
    _reg_rename(rel: _IRelation, oldName: string, newName: string): void;
    tablesCount(t: _Transaction): number;
    listTables(): Iterable<_ITable>;
    registerFunction(fn: FunctionDefinition, replace?: boolean): this;
    registerOperator(op: OperatorDefinition, replace?: boolean): this;
    private _registerOperator;
    resolveFunction(name: string | QName, args: IValue[], forceOwn?: boolean): _FunctionDefinition | nil;
    getFunction(name: string, args: _IType[]): _FunctionDefinition | nil;
    dropFunction(fn: DropFunctionStatement): void;
    resolveOperator(name: BinaryOperator, left: IValue, right: IValue, forceOwn?: boolean): _OperatorDefinition | nil;
    migrate(config?: IMigrate.MigrationParams): Promise<void>;
    interceptQueries(intercept: QueryInterceptor): ISubscription;
}
//# sourceMappingURL=schema.d.ts.map