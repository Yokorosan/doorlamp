function fail(reason = 'fail was callend in a test.') {
    throw new Error(reason)
}

(global as any).fail = fail