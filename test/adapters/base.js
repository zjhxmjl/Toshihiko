/**
 * XadillaX created at 2016-08-08 17:29:52 With ♥
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 */
"use strict";

require("should");

const Adapter = require("../../lib/adapters/base");

describe("🐣 adapters/base", function() {
    const adapter = new Adapter({}, {});

    describe("create", function() {
        it("should create a base adapter", function() {
            const par = {};
            const options = { foo: "bar" };
            const adapter = new Adapter(par, options);

            adapter.parent.should.be.eql(par);

            adapter.options.should.deepEqual(options);
            adapter.options.should.not.equal(options);
        });
    });

    describe("execute", function() {
        it("should be async", function(done) {
            let flag = false;
            let ok = false;

            adapter.execute({}, function() {
                flag = true;
                if(ok) done();
            });

            flag.should.equal(false);
            ok = true;
        });
    });
});