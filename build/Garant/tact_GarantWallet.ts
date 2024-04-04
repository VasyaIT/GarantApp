import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw);
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw);
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwner = {
    $$type: 'ChangeOwner';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwner(src: ChangeOwner) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2174598809, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwner(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2174598809) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwner(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwner(source: ChangeOwner) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwner(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwnerOk = {
    $$type: 'ChangeOwnerOk';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(846932810, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwnerOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 846932810) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwnerOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwnerOk(src.loadRef().beginParse());
        }
    }
}

export type Data = {
    $$type: 'Data';
    owner: Address;
    amount: bigint;
    isTon: boolean;
    nftAddress: Address;
}

export function storeData(src: Data) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.owner);
        b_0.storeInt(src.amount, 257);
        b_0.storeBit(src.isTon);
        b_0.storeAddress(src.nftAddress);
    };
}

export function loadData(slice: Slice) {
    let sc_0 = slice;
    let _owner = sc_0.loadAddress();
    let _amount = sc_0.loadIntBig(257);
    let _isTon = sc_0.loadBit();
    let _nftAddress = sc_0.loadAddress();
    return { $$type: 'Data' as const, owner: _owner, amount: _amount, isTon: _isTon, nftAddress: _nftAddress };
}

function loadTupleData(source: TupleReader) {
    let _owner = source.readAddress();
    let _amount = source.readBigNumber();
    let _isTon = source.readBoolean();
    let _nftAddress = source.readAddress();
    return { $$type: 'Data' as const, owner: _owner, amount: _amount, isTon: _isTon, nftAddress: _nftAddress };
}

function storeTupleData(source: Data) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.owner);
    builder.writeNumber(source.amount);
    builder.writeBoolean(source.isTon);
    builder.writeAddress(source.nftAddress);
    return builder.build();
}

function dictValueParserData(): DictionaryValue<Data> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeData(src)).endCell());
        },
        parse: (src) => {
            return loadData(src.loadRef().beginParse());
        }
    }
}

export type TokenTransfer = {
    $$type: 'TokenTransfer';
    query_id: bigint;
    amount: bigint;
    destination: Address;
    response_destination: Address | null;
    custom_payload: Cell | null;
    forward_ton_amount: bigint;
    forward_payload: Cell;
}

export function storeTokenTransfer(src: TokenTransfer) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(260734629, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.destination);
        b_0.storeAddress(src.response_destination);
        if (src.custom_payload !== null && src.custom_payload !== undefined) { b_0.storeBit(true).storeRef(src.custom_payload); } else { b_0.storeBit(false); }
        b_0.storeCoins(src.forward_ton_amount);
        b_0.storeBuilder(src.forward_payload.asBuilder());
    };
}

export function loadTokenTransfer(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 260734629) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _amount = sc_0.loadCoins();
    let _destination = sc_0.loadAddress();
    let _response_destination = sc_0.loadMaybeAddress();
    let _custom_payload = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _forward_ton_amount = sc_0.loadCoins();
    let _forward_payload = sc_0.asCell();
    return { $$type: 'TokenTransfer' as const, query_id: _query_id, amount: _amount, destination: _destination, response_destination: _response_destination, custom_payload: _custom_payload, forward_ton_amount: _forward_ton_amount, forward_payload: _forward_payload };
}

function loadTupleTokenTransfer(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _destination = source.readAddress();
    let _response_destination = source.readAddressOpt();
    let _custom_payload = source.readCellOpt();
    let _forward_ton_amount = source.readBigNumber();
    let _forward_payload = source.readCell();
    return { $$type: 'TokenTransfer' as const, query_id: _query_id, amount: _amount, destination: _destination, response_destination: _response_destination, custom_payload: _custom_payload, forward_ton_amount: _forward_ton_amount, forward_payload: _forward_payload };
}

function storeTupleTokenTransfer(source: TokenTransfer) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.destination);
    builder.writeAddress(source.response_destination);
    builder.writeCell(source.custom_payload);
    builder.writeNumber(source.forward_ton_amount);
    builder.writeSlice(source.forward_payload);
    return builder.build();
}

function dictValueParserTokenTransfer(): DictionaryValue<TokenTransfer> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeTokenTransfer(src)).endCell());
        },
        parse: (src) => {
            return loadTokenTransfer(src.loadRef().beginParse());
        }
    }
}

export type NftTransfer = {
    $$type: 'NftTransfer';
    query_id: bigint;
    new_owner: Address;
    response_destination: Address;
    custom_payload: Cell | null;
    forward_amount: bigint;
    forward_payload: Cell;
}

export function storeNftTransfer(src: NftTransfer) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1607220500, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeAddress(src.new_owner);
        b_0.storeAddress(src.response_destination);
        if (src.custom_payload !== null && src.custom_payload !== undefined) { b_0.storeBit(true).storeRef(src.custom_payload); } else { b_0.storeBit(false); }
        b_0.storeCoins(src.forward_amount);
        b_0.storeBuilder(src.forward_payload.asBuilder());
    };
}

export function loadNftTransfer(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1607220500) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _new_owner = sc_0.loadAddress();
    let _response_destination = sc_0.loadAddress();
    let _custom_payload = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _forward_amount = sc_0.loadCoins();
    let _forward_payload = sc_0.asCell();
    return { $$type: 'NftTransfer' as const, query_id: _query_id, new_owner: _new_owner, response_destination: _response_destination, custom_payload: _custom_payload, forward_amount: _forward_amount, forward_payload: _forward_payload };
}

function loadTupleNftTransfer(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _new_owner = source.readAddress();
    let _response_destination = source.readAddress();
    let _custom_payload = source.readCellOpt();
    let _forward_amount = source.readBigNumber();
    let _forward_payload = source.readCell();
    return { $$type: 'NftTransfer' as const, query_id: _query_id, new_owner: _new_owner, response_destination: _response_destination, custom_payload: _custom_payload, forward_amount: _forward_amount, forward_payload: _forward_payload };
}

function storeTupleNftTransfer(source: NftTransfer) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeAddress(source.new_owner);
    builder.writeAddress(source.response_destination);
    builder.writeCell(source.custom_payload);
    builder.writeNumber(source.forward_amount);
    builder.writeSlice(source.forward_payload);
    return builder.build();
}

function dictValueParserNftTransfer(): DictionaryValue<NftTransfer> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeNftTransfer(src)).endCell());
        },
        parse: (src) => {
            return loadNftTransfer(src.loadRef().beginParse());
        }
    }
}

export type JettonNotify = {
    $$type: 'JettonNotify';
    query_id: bigint;
    amount: bigint;
    sender: Address;
    forward_payload: Cell;
}

export function storeJettonNotify(src: JettonNotify) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1935855772, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.sender);
        b_0.storeBuilder(src.forward_payload.asBuilder());
    };
}

export function loadJettonNotify(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1935855772) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _amount = sc_0.loadCoins();
    let _sender = sc_0.loadAddress();
    let _forward_payload = sc_0.asCell();
    return { $$type: 'JettonNotify' as const, query_id: _query_id, amount: _amount, sender: _sender, forward_payload: _forward_payload };
}

function loadTupleJettonNotify(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _sender = source.readAddress();
    let _forward_payload = source.readCell();
    return { $$type: 'JettonNotify' as const, query_id: _query_id, amount: _amount, sender: _sender, forward_payload: _forward_payload };
}

function storeTupleJettonNotify(source: JettonNotify) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.sender);
    builder.writeSlice(source.forward_payload);
    return builder.build();
}

function dictValueParserJettonNotify(): DictionaryValue<JettonNotify> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeJettonNotify(src)).endCell());
        },
        parse: (src) => {
            return loadJettonNotify(src.loadRef().beginParse());
        }
    }
}

export type OwnershipAssigned = {
    $$type: 'OwnershipAssigned';
    query_id: bigint;
    prev_owner: Address;
    forward_payload: Cell;
}

export function storeOwnershipAssigned(src: OwnershipAssigned) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(85167505, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeAddress(src.prev_owner);
        b_0.storeBuilder(src.forward_payload.asBuilder());
    };
}

export function loadOwnershipAssigned(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 85167505) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _prev_owner = sc_0.loadAddress();
    let _forward_payload = sc_0.asCell();
    return { $$type: 'OwnershipAssigned' as const, query_id: _query_id, prev_owner: _prev_owner, forward_payload: _forward_payload };
}

function loadTupleOwnershipAssigned(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _prev_owner = source.readAddress();
    let _forward_payload = source.readCell();
    return { $$type: 'OwnershipAssigned' as const, query_id: _query_id, prev_owner: _prev_owner, forward_payload: _forward_payload };
}

function storeTupleOwnershipAssigned(source: OwnershipAssigned) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeAddress(source.prev_owner);
    builder.writeSlice(source.forward_payload);
    return builder.build();
}

function dictValueParserOwnershipAssigned(): DictionaryValue<OwnershipAssigned> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeOwnershipAssigned(src)).endCell());
        },
        parse: (src) => {
            return loadOwnershipAssigned(src.loadRef().beginParse());
        }
    }
}

export type Withdraw = {
    $$type: 'Withdraw';
    amount: bigint;
    jettonWalletAddress: Address;
}

export function storeWithdraw(src: Withdraw) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(976735757, 32);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.jettonWalletAddress);
    };
}

export function loadWithdraw(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 976735757) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadCoins();
    let _jettonWalletAddress = sc_0.loadAddress();
    return { $$type: 'Withdraw' as const, amount: _amount, jettonWalletAddress: _jettonWalletAddress };
}

function loadTupleWithdraw(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _jettonWalletAddress = source.readAddress();
    return { $$type: 'Withdraw' as const, amount: _amount, jettonWalletAddress: _jettonWalletAddress };
}

function storeTupleWithdraw(source: Withdraw) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.jettonWalletAddress);
    return builder.build();
}

function dictValueParserWithdraw(): DictionaryValue<Withdraw> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeWithdraw(src)).endCell());
        },
        parse: (src) => {
            return loadWithdraw(src.loadRef().beginParse());
        }
    }
}

export type WithdrawTon = {
    $$type: 'WithdrawTon';
    amount: bigint;
}

export function storeWithdrawTon(src: WithdrawTon) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(4206811366, 32);
        b_0.storeCoins(src.amount);
    };
}

export function loadWithdrawTon(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 4206811366) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadCoins();
    return { $$type: 'WithdrawTon' as const, amount: _amount };
}

function loadTupleWithdrawTon(source: TupleReader) {
    let _amount = source.readBigNumber();
    return { $$type: 'WithdrawTon' as const, amount: _amount };
}

function storeTupleWithdrawTon(source: WithdrawTon) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    return builder.build();
}

function dictValueParserWithdrawTon(): DictionaryValue<WithdrawTon> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeWithdrawTon(src)).endCell());
        },
        parse: (src) => {
            return loadWithdrawTon(src.loadRef().beginParse());
        }
    }
}

export type WithdrawNft = {
    $$type: 'WithdrawNft';
    nftAddress: Address;
    newOwner: Address;
}

export function storeWithdrawNft(src: WithdrawNft) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2144643456, 32);
        b_0.storeAddress(src.nftAddress);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadWithdrawNft(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2144643456) { throw Error('Invalid prefix'); }
    let _nftAddress = sc_0.loadAddress();
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'WithdrawNft' as const, nftAddress: _nftAddress, newOwner: _newOwner };
}

function loadTupleWithdrawNft(source: TupleReader) {
    let _nftAddress = source.readAddress();
    let _newOwner = source.readAddress();
    return { $$type: 'WithdrawNft' as const, nftAddress: _nftAddress, newOwner: _newOwner };
}

function storeTupleWithdrawNft(source: WithdrawNft) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.nftAddress);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserWithdrawNft(): DictionaryValue<WithdrawNft> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeWithdrawNft(src)).endCell());
        },
        parse: (src) => {
            return loadWithdrawNft(src.loadRef().beginParse());
        }
    }
}

export type SendNft = {
    $$type: 'SendNft';
    newOwner: Address;
    nftAddress: Address;
}

export function storeSendNft(src: SendNft) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2777898148, 32);
        b_0.storeAddress(src.newOwner);
        b_0.storeAddress(src.nftAddress);
    };
}

export function loadSendNft(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2777898148) { throw Error('Invalid prefix'); }
    let _newOwner = sc_0.loadAddress();
    let _nftAddress = sc_0.loadAddress();
    return { $$type: 'SendNft' as const, newOwner: _newOwner, nftAddress: _nftAddress };
}

function loadTupleSendNft(source: TupleReader) {
    let _newOwner = source.readAddress();
    let _nftAddress = source.readAddress();
    return { $$type: 'SendNft' as const, newOwner: _newOwner, nftAddress: _nftAddress };
}

function storeTupleSendNft(source: SendNft) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.newOwner);
    builder.writeAddress(source.nftAddress);
    return builder.build();
}

function dictValueParserSendNft(): DictionaryValue<SendNft> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSendNft(src)).endCell());
        },
        parse: (src) => {
            return loadSendNft(src.loadRef().beginParse());
        }
    }
}

export type SendTon = {
    $$type: 'SendTon';
    toAddress: Address;
    amount: bigint;
}

export function storeSendTon(src: SendTon) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(643542012, 32);
        b_0.storeAddress(src.toAddress);
        b_0.storeCoins(src.amount);
    };
}

export function loadSendTon(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 643542012) { throw Error('Invalid prefix'); }
    let _toAddress = sc_0.loadAddress();
    let _amount = sc_0.loadCoins();
    return { $$type: 'SendTon' as const, toAddress: _toAddress, amount: _amount };
}

function loadTupleSendTon(source: TupleReader) {
    let _toAddress = source.readAddress();
    let _amount = source.readBigNumber();
    return { $$type: 'SendTon' as const, toAddress: _toAddress, amount: _amount };
}

function storeTupleSendTon(source: SendTon) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.toAddress);
    builder.writeNumber(source.amount);
    return builder.build();
}

function dictValueParserSendTon(): DictionaryValue<SendTon> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSendTon(src)).endCell());
        },
        parse: (src) => {
            return loadSendTon(src.loadRef().beginParse());
        }
    }
}

export type SendJetton = {
    $$type: 'SendJetton';
    jettonWalletAddress: Address;
    toAddress: Address;
    amount: bigint;
}

export function storeSendJetton(src: SendJetton) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1423420830, 32);
        b_0.storeAddress(src.jettonWalletAddress);
        b_0.storeAddress(src.toAddress);
        b_0.storeCoins(src.amount);
    };
}

export function loadSendJetton(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1423420830) { throw Error('Invalid prefix'); }
    let _jettonWalletAddress = sc_0.loadAddress();
    let _toAddress = sc_0.loadAddress();
    let _amount = sc_0.loadCoins();
    return { $$type: 'SendJetton' as const, jettonWalletAddress: _jettonWalletAddress, toAddress: _toAddress, amount: _amount };
}

function loadTupleSendJetton(source: TupleReader) {
    let _jettonWalletAddress = source.readAddress();
    let _toAddress = source.readAddress();
    let _amount = source.readBigNumber();
    return { $$type: 'SendJetton' as const, jettonWalletAddress: _jettonWalletAddress, toAddress: _toAddress, amount: _amount };
}

function storeTupleSendJetton(source: SendJetton) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.jettonWalletAddress);
    builder.writeAddress(source.toAddress);
    builder.writeNumber(source.amount);
    return builder.build();
}

function dictValueParserSendJetton(): DictionaryValue<SendJetton> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSendJetton(src)).endCell());
        },
        parse: (src) => {
            return loadSendJetton(src.loadRef().beginParse());
        }
    }
}

 type GarantWallet_init_args = {
    $$type: 'GarantWallet_init_args';
    owner: Address;
    amount: bigint;
    isTon: boolean;
    nftAddress: Address;
}

function initGarantWallet_init_args(src: GarantWallet_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.owner);
        b_0.storeInt(src.amount, 257);
        b_0.storeBit(src.isTon);
        b_0.storeAddress(src.nftAddress);
    };
}

async function GarantWallet_init(owner: Address, amount: bigint, isTon: boolean, nftAddress: Address) {
    const __code = Cell.fromBase64('te6ccgECGAEABYgAART/APSkE/S88sgLAQIBYgIDA3rQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVE9s88uCCEwQFAgFYDxADzu2i7fsBkjB/4HAh10nCH5UwINcLH94gghBzYtCcuuMCIMAAItdJwSGwklt/4CCCEJRqmLa6jqgw0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4MAAkTDjDXAGCQcApsj4QwHMfwHKAFUwUEMg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYB+gISygABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8Wye1UA/Qw0x8BghBzYtCcuvLggdM/+gD6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIVBMDECNsFDAkwACPt4EP1lEmvhLy9BUUQzDbPMjJghAF9eEAyHABywDJ0CUQSFE3UTgDyFVg2zzJEDRBMPhCAX9t2zySXwPifwsICQP++QEggvBCtfAE9yGyDUhe54NTZ6Y1wp0CNoSVsuXyeg+QZjlG0LqPNDD4QW8kW4IA2QEyJccF8vRwyMlTEcjLAMnQJ1E4QTPIVVDbPMlwgEIjA39VMG1t2zx/2zHggvDSIeoHfpzRSZvhxQ/kIJjml3qXGN7ckYFtbt4nrq0JmwwNCgDeghAPin6lUAjLHxbLP1AE+gJYINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WASBulTBwAcsBjh4g10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbiIW6zlX8BygDMlHAyygDiAfoCAc8WATptbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPA0CVrqPJ/hBbyQwMiPA/48WgR9mUSW+EvL0U0Nyf1UgbW1t2zzbPJFb4n/bMeANCwJUcMjJghAF9eEAIsjLAMnQJBBFVSDIVVDbPMmCEB3NZQByIwN/VTBtbds8DA0AwoIQX8w9FFAHyx8Vyz9QAyDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFgEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYhbrOVfwHKAMyUcDLKAOIB+gIBzxYByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADgCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAIBIBESAgFIFhcCEbTsW2ebZ42IkBMUAJW3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOE7Lpy1Zp2W5nQdLNsozdFJABwO1E0NQB+GPSAAGOSPpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB+gDSAPpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgUQzBsFOD4KNcLCoMJuvLgiRUACFRzISMAmvpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgBgQEB1wDSAPpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgUQzAE0VUCABGwr7tRNDSAAGAAdbJu40NWlwZnM6Ly9RbWNKcktxZUVUM2pzNXB3UmE4eGhoMWpVR1ZFZ2FFeHMzVmV1VGdRQVhrcFVkgg');
    const __system = Cell.fromBase64('te6cckECGgEABZIAAQHAAQEFoT0hAgEU/wD0pBP0vPLICwMCAWIMBAIBWAgFAgFIBwYAdbJu40NWlwZnM6Ly9RbWNKcktxZUVUM2pzNXB3UmE4eGhoMWpVR1ZFZ2FFeHMzVmV1VGdRQVhrcFVkggABGwr7tRNDSAAGACASAKCQCVt3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwThOy6ctWadluZ0HSzbKM3RSQAhG07Ftnm2eNiJAYCwAIVHMhIwN60AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRPbPPLgghgODQCmyPhDAcx/AcoAVTBQQyDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFgH6AhLKAAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbJ7VQDzu2i7fsBkjB/4HAh10nCH5UwINcLH94gghBzYtCcuuMCIMAAItdJwSGwklt/4CCCEJRqmLa6jqgw0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4MAAkTDjDXAREg8D/vkBIILwQrXwBPchsg1IXueDU2emNcKdAjaElbLl8noPkGY5RtC6jzQw+EFvJFuCANkBMiXHBfL0cMjJUxHIywDJ0CdROEEzyFVQ2zzJcIBCIwN/VTBtbds8f9sx4ILw0iHqB36c0Umb4cUP5CCY5pd6lxje3JGBbW7eJ66tCZsXFRACVrqPJ/hBbyQwMiPA/48WgR9mUSW+EvL0U0Nyf1UgbW1t2zzbPJFb4n/bMeAVFAP0MNMfAYIQc2LQnLry4IHTP/oA+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFQTAxAjbBQwJMAAj7eBD9ZRJr4S8vQVFEMw2zzIyYIQBfXhAMhwAcsAydAlEEhRN1E4A8hVYNs8yRA0QTD4QgF/bds8kl8D4n8UExIBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8FQDeghAPin6lUAjLHxbLP1AE+gJYINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WASBulTBwAcsBjh4g10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbiIW6zlX8BygDMlHAyygDiAfoCAc8WAlRwyMmCEAX14QAiyMsAydAkEEVVIMhVUNs8yYIQHc1lAHIjA39VMG1t2zwXFQHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAWAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAMKCEF/MPRRQB8sfFcs/UAMg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WIW6zlX8BygDMlHAyygDiAfoCAc8WAcDtRNDUAfhj0gABjkj6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfoA0gD6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIFEMwbBTg+CjXCwqDCbry4IkZAJr6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAYEBAdcA0gD6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIFEMwBNFVAkl0jfM=');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initGarantWallet_init_args({ $$type: 'GarantWallet_init_args', owner, amount, isTon, nftAddress })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const GarantWallet_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack undeflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    4054: { message: `Not enougth jettons` },
    8038: { message: `Not enougth TONs` },
    55553: { message: `Forbidden` },
}

const GarantWallet_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwner","header":2174598809,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwnerOk","header":846932810,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"Data","header":null,"fields":[{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"isTon","type":{"kind":"simple","type":"bool","optional":false}},{"name":"nftAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"TokenTransfer","header":260734629,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"destination","type":{"kind":"simple","type":"address","optional":false}},{"name":"response_destination","type":{"kind":"simple","type":"address","optional":true}},{"name":"custom_payload","type":{"kind":"simple","type":"cell","optional":true}},{"name":"forward_ton_amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"forward_payload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"NftTransfer","header":1607220500,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"new_owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"response_destination","type":{"kind":"simple","type":"address","optional":false}},{"name":"custom_payload","type":{"kind":"simple","type":"cell","optional":true}},{"name":"forward_amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"forward_payload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"JettonNotify","header":1935855772,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"forward_payload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"OwnershipAssigned","header":85167505,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"prev_owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"forward_payload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"Withdraw","header":976735757,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"jettonWalletAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"WithdrawTon","header":4206811366,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"WithdrawNft","header":2144643456,"fields":[{"name":"nftAddress","type":{"kind":"simple","type":"address","optional":false}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"SendNft","header":2777898148,"fields":[{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}},{"name":"nftAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"SendTon","header":643542012,"fields":[{"name":"toAddress","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"SendJetton","header":1423420830,"fields":[{"name":"jettonWalletAddress","type":{"kind":"simple","type":"address","optional":false}},{"name":"toAddress","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
]

const GarantWallet_getters: ABIGetter[] = [
    {"name":"data","arguments":[],"returnType":{"kind":"simple","type":"Data","optional":false}},
]

const GarantWallet_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"JettonNotify"}},
    {"receiver":"internal","message":{"kind":"text","text":"Cancel"}},
    {"receiver":"internal","message":{"kind":"text","text":"Buy"}},
    {"receiver":"internal","message":{"kind":"empty"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class GarantWallet implements Contract {
    
    static async init(owner: Address, amount: bigint, isTon: boolean, nftAddress: Address) {
        return await GarantWallet_init(owner, amount, isTon, nftAddress);
    }
    
    static async fromInit(owner: Address, amount: bigint, isTon: boolean, nftAddress: Address) {
        const init = await GarantWallet_init(owner, amount, isTon, nftAddress);
        const address = contractAddress(0, init);
        return new GarantWallet(address, init);
    }
    
    static fromAddress(address: Address) {
        return new GarantWallet(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  GarantWallet_types,
        getters: GarantWallet_getters,
        receivers: GarantWallet_receivers,
        errors: GarantWallet_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: JettonNotify | 'Cancel' | 'Buy' | null | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'JettonNotify') {
            body = beginCell().store(storeJettonNotify(message)).endCell();
        }
        if (message === 'Cancel') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message === 'Buy') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message === null) {
            body = new Cell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getData(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('data', builder.build())).stack;
        const result = loadTupleData(source);
        return result;
    }
    
}