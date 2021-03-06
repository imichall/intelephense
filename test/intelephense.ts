import { Intelephense } from '../src/intelephense';
import { assert } from 'chai';
import 'mocha';

describe('intelephense', function(){

    describe('#initialise', function(){

        it('Built in symbols', function(){

            Intelephense.initialise({
                storagePath:'/tmp/intelephense',
                logWriter:undefined
            });
            assert.isAbove(Intelephense.numberSymbolsKnown(), 1);

            let src = 
            `<?php
            class Result implements Iterator, ResultInterface
            {
                /**
                 * @var \mysqli|\mysqli_result|\mysqli_stmt
                 */
                protected $resource = null;

                function fn()
                {
                    $data = $this->resource->result_metadata();
                }
            }
            `;

            Intelephense.openDocument({uri:'test', text:src, languageId:'php', version:0});

        });

    });

    it('undefined storagePath', () =>{

        return Intelephense.initialise({
            storagePath:undefined,
            logWriter:undefined
        }).then(()=>{

        });


    });

});