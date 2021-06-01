import { isServer } from '@aomao/engine';

if (!isServer) {
	import('codemirror/mode/shell/shell');
	import('codemirror/mode/clike/clike');
	import('codemirror/mode/css/css');
	import('codemirror/mode/dart/dart');
	import('codemirror/mode/diff/diff');
	import('codemirror/mode/dockerfile/dockerfile');
	import('codemirror/mode/erlang/erlang');
	import('codemirror/mode/go/go');
	import('codemirror/mode/groovy/groovy');
	import('codemirror/mode/htmlmixed/htmlmixed');
	import('codemirror/mode/http/http');
	import('codemirror/mode/javascript/javascript');
	import('codemirror/mode/jsx/jsx');
	import('codemirror/mode/cmake/cmake');
	import('codemirror/mode/markdown/markdown');
	import('codemirror/mode/octave/octave');
	import('codemirror/mode/nginx/nginx');
	import('codemirror/mode/pascal/pascal');
	import('codemirror/mode/perl/perl');
	import('codemirror/mode/php/php');
	import('codemirror/mode/powershell/powershell');
	import('codemirror/mode/protobuf/protobuf');
	import('codemirror/mode/python/python');
	import('codemirror/mode/r/r');
	import('codemirror/mode/ruby/ruby');
	import('codemirror/mode/rust/rust');
	import('codemirror/mode/sql/sql');
	import('codemirror/mode/swift/swift');
	import('codemirror/mode/vb/vb');
	import('codemirror/mode/velocity/velocity');
	import('codemirror/mode/xml/xml');
	import('codemirror/mode/yaml/yaml');
}
