(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"), require("react-dnd-html5-backend"), require("react-dnd"), require("classnames"), require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react", "react-dnd-html5-backend", "react-dnd", "classnames", "moment"], factory);
	else if(typeof exports === 'object')
		exports["react-keyed-file-browser"] = factory(require("prop-types"), require("react"), require("react-dnd-html5-backend"), require("react-dnd"), require("classnames"), require("moment"));
	else
		root["react-keyed-file-browser"] = factory(root["prop-types"], root["react"], root["react-dnd-html5-backend"], root["react-dnd"], root["classnames"], root["moment"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_17__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Sorters = exports.Groupers = exports.Filters = exports.Details = exports.FolderRenderers = exports.FileRenderers = exports.Headers = exports.BaseFolderConnectors = exports.BaseFolder = exports.BaseFileConnectors = exports.BaseFile = exports.RawFileBrowser = undefined;

	var _browser = __webpack_require__(1);

	var _browser2 = _interopRequireDefault(_browser);

	var _baseFile = __webpack_require__(13);

	var _baseFile2 = _interopRequireDefault(_baseFile);

	var _baseFolder = __webpack_require__(23);

	var _baseFolder2 = _interopRequireDefault(_baseFolder);

	var _headers = __webpack_require__(10);

	var Headers = _interopRequireWildcard(_headers);

	var _files = __webpack_require__(15);

	var FileRenderers = _interopRequireWildcard(_files);

	var _folders = __webpack_require__(21);

	var FolderRenderers = _interopRequireWildcard(_folders);

	var _details = __webpack_require__(6);

	var Details = _interopRequireWildcard(_details);

	var _filters = __webpack_require__(8);

	var Filters = _interopRequireWildcard(_filters);

	var _groupers = __webpack_require__(25);

	var Groupers = _interopRequireWildcard(_groupers);

	var _sorters = __webpack_require__(27);

	var Sorters = _interopRequireWildcard(_sorters);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _browser2.default;
	exports.RawFileBrowser = _browser.RawFileBrowser;
	exports.BaseFile = _baseFile2.default;
	exports.BaseFileConnectors = _baseFile.BaseFileConnectors;
	exports.BaseFolder = _baseFolder2.default;
	exports.BaseFolderConnectors = _baseFolder.BaseFolderConnectors;
	exports.Headers = Headers;
	exports.FileRenderers = FileRenderers;
	exports.FolderRenderers = FolderRenderers;
	exports.Details = Details;
	exports.Filters = Filters;
	exports.Groupers = Groupers;
	exports.Sorters = Sorters;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RawFileBrowser = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp2, _dec, _class2;
	// drag and drop


	// default components (most overridable)


	// default renderers


	// default processors


	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDndHtml5Backend = __webpack_require__(4);

	var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

	var _reactDnd = __webpack_require__(5);

	var _details = __webpack_require__(6);

	var _filters = __webpack_require__(8);

	var _headers = __webpack_require__(10);

	var _files = __webpack_require__(15);

	var _folders = __webpack_require__(21);

	var _groupers = __webpack_require__(25);

	var _sorters = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SEARCH_RESULTS_PER_PAGE = 20;

	function getItemProps(file, browserProps) {
	  return {
	    key: 'file-' + file.key,
	    fileKey: file.key,
	    isSelected: file.key === browserProps.selection,
	    isOpen: file.key in browserProps.openFolders || browserProps.nameFilter,
	    isRenaming: browserProps.activeAction === 'rename' && browserProps.actionTarget === file.key,
	    isDeleting: browserProps.activeAction === 'delete' && browserProps.actionTarget === file.key,
	    isDraft: !!file.draft
	  };
	}

	var RawFileBrowser = (_temp2 = _class = function (_React$Component) {
	  _inherits(RawFileBrowser, _React$Component);

	  function RawFileBrowser() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, RawFileBrowser);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RawFileBrowser.__proto__ || Object.getPrototypeOf(RawFileBrowser)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      openFolders: {},
	      selection: null,
	      activeAction: null,
	      actionTarget: null,

	      nameFilter: '',
	      searchResultsShown: SEARCH_RESULTS_PER_PAGE,

	      previewFile: null,

	      addFolder: null
	    }, _this.createFiles = function (files, prefix) {
	      _this.setState(function (state) {
	        if (prefix) {
	          state.openFolders[prefix] = true;
	        }
	        state.selection = null;
	        return state;
	      }, function () {
	        _this.props.onCreateFiles(files, prefix);
	      });
	    }, _this.createFolder = function (key) {
	      _this.setState(function (state) {
	        state.activeAction = null;
	        state.actionTarget = null;
	        state.selection = key;
	      }, _this.props.onCreateFolder(key));
	    }, _this.moveFile = function (oldKey, newKey) {
	      _this.setState({
	        activeAction: null,
	        actionTarget: null,
	        selection: newKey
	      }, function () {
	        _this.props.onMoveFile(oldKey, newKey);
	      });
	    }, _this.moveFolder = function (oldKey, newKey) {
	      _this.setState(function (state) {
	        state.activeAction = null;
	        state.actionTarget = null;
	        state.selection = newKey;
	        if (oldKey in state.openFolders) {
	          delete state.openFolders[newKey];
	          state.openFolders[newKey] = true;
	        }
	        return state;
	      }, function () {
	        _this.props.onMoveFolder(oldKey, newKey);
	      });
	    }, _this.renameFile = function (oldKey, newKey) {
	      _this.setState({
	        activeAction: null,
	        actionTarget: null,
	        selection: newKey
	      }, function () {
	        _this.props.onRenameFile(oldKey, newKey);
	      });
	    }, _this.renameFolder = function (oldKey, newKey) {
	      _this.setState(function (state) {
	        state.activeAction = null;
	        state.actionTarget = null;
	        if (state.selection.substr(0, oldKey.length) === oldKey) {
	          state.selection = state.selection.replace(oldKey, newKey);
	        }
	        if (oldKey in state.openFolders) {
	          delete state.openFolders[newKey];
	          state.openFolders[newKey] = true;
	        }
	        return state;
	      }, function () {
	        _this.props.onRenameFolder(oldKey, newKey);
	      });
	    }, _this.deleteFile = function (key) {
	      _this.setState({
	        activeAction: null,
	        actionTarget: null,
	        selection: null
	      }, function () {
	        _this.props.onDeleteFile(key);
	      });
	    }, _this.deleteFolder = function (key) {
	      _this.setState(function (state) {
	        state.activeAction = null;
	        state.actionTarget = null;
	        state.selection = null;
	        if (key in state.openFolders) {
	          delete state.openFolders[key];
	        }
	        return state;
	      }, function () {
	        _this.props.onDeleteFolder(key);
	      });
	    }, _this.beginAction = function (action, key) {
	      _this.setState(function (state) {
	        state.activeAction = action;
	        state.actionTarget = key;
	        return state;
	      });
	    }, _this.endAction = function () {
	      if (_this.state.selection !== null && _this.state.selection.indexOf('__new__') !== -1) {
	        _this.setState({ selection: null });
	      }
	      _this.beginAction(null, null);
	    }, _this.select = function (key) {
	      _this.setState(function (state) {
	        state.selection = key;
	        if (state.actionTarget !== null && state.actionTarget !== key) {
	          state.actionTarget = null;
	          state.activeAction = null;
	        }
	        return state;
	      });
	    }, _this.preview = function (file) {
	      _this.setState(function (state) {
	        state.previewFile = file;
	        return state;
	      });
	    }, _this.closeDetail = function () {
	      _this.setState(function (state) {
	        state.previewFile = null;
	        return state;
	      });
	    }, _this.handleShowMoreClick = function (event) {
	      event.preventDefault();
	      _this.setState(function (state) {
	        state.searchResultsShown += SEARCH_RESULTS_PER_PAGE;
	        return state;
	      });
	    }, _this.toggleFolder = function (folderKey) {
	      _this.setState(function (state) {
	        if (folderKey in state.openFolders) {
	          delete state.openFolders[folderKey];
	        } else {
	          state.openFolders[folderKey] = true;
	        }
	        return state;
	      });
	    }, _this.openFolder = function (folderKey) {
	      _this.setState(function (state) {
	        state.openFolders[folderKey] = true;
	        return state;
	      });
	    }, _this.handleGlobalClick = function (event) {
	      var inBrowser = !!_this.refs.browser.contains(event.target);
	      var inPreview = !!(typeof _this.refs.preview !== 'undefined' && _this.refs.preview.contains(event.target));
	      if (!inBrowser && !inPreview) {
	        _this.setState(function (state) {
	          state.selection = null;
	          state.actionTarget = null;
	          state.activeAction = null;
	          return state;
	        });
	      }
	    }, _this.handleActionBarRenameClick = function (event) {
	      event.preventDefault();
	      _this.beginAction('rename', _this.state.selection);
	    }, _this.handleActionBarDeleteClick = function (event) {
	      event.preventDefault();
	      _this.beginAction('delete', _this.state.selection);
	    }, _this.handleActionBarAddFolderClick = function (event) {
	      event.preventDefault();
	      if (_this.state.activeAction === 'createFolder') {
	        return;
	      }
	      var addKey = '';
	      if (_this.state.selection) {
	        addKey += _this.state.selection;
	        if (addKey.substr(addKey.length - 1, addKey.length) !== '/') {
	          addKey += '/';
	        }
	      }
	      addKey += '__new__/';
	      _this.setState(function (state) {
	        state.actionTarget = addKey;
	        state.activeAction = 'createFolder';
	        state.selection = addKey;
	        if (_this.state.selection) {
	          state.openFolders[_this.state.selection] = true;
	        }
	        return state;
	      });
	    }, _this.updateFilter = function (newValue) {
	      _this.setState(function (state) {
	        state.nameFilter = newValue;
	        state.searchResultsShown = SEARCH_RESULTS_PER_PAGE;
	        return state;
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(RawFileBrowser, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.renderStyle === 'table' && this.props.nestChildren) {
	        console.warn('Invalid settings: Cannot nest table children in file browser');
	      }

	      window.addEventListener('click', this.handleGlobalClick);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('click', this.handleGlobalClick);
	    }

	    // item manipulation


	    // browser manipulation


	    // event handlers

	  }, {
	    key: 'getBrowserProps',
	    value: function getBrowserProps() {
	      return {
	        // browser config
	        nestChildren: this.props.nestChildren,
	        fileRenderer: this.props.fileRenderer,
	        fileRendererProps: this.props.fileRendererProps,
	        folderRenderer: this.props.folderRenderer,
	        folderRendererProps: this.props.folderRendererProps,

	        // browser state
	        openFolders: this.state.openFolders,
	        nameFilter: this.state.nameFilter,
	        selection: this.state.selection,
	        activeAction: this.state.activeAction,
	        actionTarget: this.state.actionTarget,

	        // browser manipulation
	        select: this.select,
	        openFolder: this.openFolder,
	        toggleFolder: this.toggleFolder,
	        beginAction: this.beginAction,
	        endAction: this.endAction,
	        preview: this.preview,

	        // item manipulation
	        createFiles: this.props.onCreateFiles ? this.createFiles : undefined,
	        createFolder: this.props.onCreateFolder ? this.createFolder : undefined,
	        renameFile: this.props.onRenameFile ? this.renameFile : undefined,
	        renameFolder: this.props.onRenameFolder ? this.renameFolder : undefined,
	        moveFile: this.props.onMoveFile ? this.moveFile : undefined,
	        moveFolder: this.props.onMoveFolder ? this.moveFolder : undefined,
	        deleteFile: this.props.onDeleteFile ? this.deleteFile : undefined,
	        deleteFolder: this.props.onDeleteFolder ? this.deleteFolder : undefined,

	        getItemProps: getItemProps
	      };
	    }
	  }, {
	    key: 'renderActionBar',
	    value: function renderActionBar(selectedItem) {
	      var selectionIsFolder = selectedItem && !selectedItem.size;
	      var filter = void 0;
	      if (this.props.canFilter) {
	        filter = _react2.default.createElement(this.props.filterRenderer, _extends({
	          value: this.state.nameFilter,
	          updateFilter: this.updateFilter
	        }, this.props.filterRendererProps));
	      }

	      var actions = void 0;
	      if (selectedItem) {
	        // Something is selected. Build custom actions depending on what it is.
	        if (selectedItem.action) {
	          // Selected item has an active action against it. Disable all other actions.
	          var actionText = void 0;
	          switch (selectedItem.action) {
	            case 'delete':
	              actionText = 'Deleting ...';
	              break;

	            case 'rename':
	              actionText = 'Renaming ...';
	              break;

	            default:
	              actionText = 'Moving ...';
	              break;
	          }
	          actions =
	          // TODO: Enable plugging in custom spinner.
	          _react2.default.createElement(
	            'div',
	            { className: 'item-actions' },
	            _react2.default.createElement('i', { className: 'icon loading fa fa-circle-o-notch fa-spin' }),
	            ' ',
	            actionText
	          );
	        } else {
	          actions = [];
	          if (selectionIsFolder && typeof this.props.onCreateFolder === 'function' && !this.state.nameFilter) {
	            actions.push(_react2.default.createElement(
	              'li',
	              { key: 'action-add-folder' },
	              _react2.default.createElement(
	                'a',
	                {
	                  onClick: this.handleActionBarAddFolderClick,
	                  href: '#',
	                  role: 'button'
	                },
	                _react2.default.createElement('i', { className: 'fa fa-folder-o', 'aria-hidden': 'true' }),
	                '\xA0Add Subfolder'
	              )
	            ));
	          }
	          if (selectedItem.keyDerived && (selectionIsFolder && typeof this.props.onRenameFile === 'function' || !selectionIsFolder && typeof this.props.onRenameFolder === 'function')) {
	            actions.push(_react2.default.createElement(
	              'li',
	              { key: 'action-rename' },
	              _react2.default.createElement(
	                'a',
	                {
	                  onClick: this.handleActionBarRenameClick,
	                  href: '#',
	                  role: 'button'
	                },
	                _react2.default.createElement('i', { className: 'fa fa-i-cursor', 'aria-hidden': 'true' }),
	                '\xA0Rename'
	              )
	            ));
	          }
	          if (selectedItem.keyDerived && (!selectionIsFolder && typeof this.props.onDeleteFile === 'function' || selectionIsFolder && typeof this.props.onDeleteFolder === 'function')) {
	            actions.push(_react2.default.createElement(
	              'li',
	              { key: 'action-delete' },
	              _react2.default.createElement(
	                'a',
	                {
	                  onClick: this.handleActionBarDeleteClick,
	                  href: '#',
	                  role: 'button'
	                },
	                _react2.default.createElement('i', { className: 'fa fa-trash-o', 'aria-hidden': 'true' }),
	                '\xA0Delete'
	              )
	            ));
	          }
	          if (actions.length) {
	            actions = _react2.default.createElement(
	              'ul',
	              { className: 'item-actions' },
	              actions
	            );
	          } else {
	            actions = _react2.default.createElement(
	              'div',
	              { className: 'item-actions' },
	              '\xA0'
	            );
	          }
	        }
	      } else {
	        // Nothing selected: We're in the 'root' folder. Only allowed action is adding a folder.
	        actions = [];
	        if (typeof this.props.onCreateFolder === 'function' && !this.state.nameFilter) {
	          actions.push(_react2.default.createElement(
	            'li',
	            { key: 'action-add-folder' },
	            _react2.default.createElement(
	              'a',
	              {
	                onClick: this.handleActionBarAddFolderClick,
	                href: '#',
	                role: 'button'
	              },
	              _react2.default.createElement('i', { className: 'fa fa-folder-o', 'aria-hidden': 'true' }),
	              '\xA0Add Folder'
	            )
	          ));
	        }
	        if (actions.length) {
	          actions = _react2.default.createElement(
	            'ul',
	            { className: 'item-actions' },
	            actions
	          );
	        } else {
	          actions = _react2.default.createElement(
	            'div',
	            { className: 'item-actions' },
	            '\xA0'
	          );
	        }
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: 'action-bar' },
	        filter,
	        actions
	      );
	    }
	  }, {
	    key: 'renderFiles',
	    value: function renderFiles(files, depth) {
	      var _this2 = this;

	      var browserProps = this.getBrowserProps();
	      var renderedFiles = [];
	      files.map(function (file) {
	        var thisItemProps = _extends({}, browserProps.getItemProps(file, browserProps), {
	          depth: _this2.state.nameFilter ? 0 : depth
	        });

	        if (file.size) {
	          renderedFiles.push(_react2.default.createElement(_this2.props.fileRenderer, _extends({}, file, thisItemProps, {
	            browserProps: browserProps
	          }, _this2.props.fileRendererProps)));
	        } else {
	          if (!_this2.state.nameFilter) {
	            renderedFiles.push(_react2.default.createElement(_this2.props.folderRenderer, _extends({}, file, thisItemProps, {
	              browserProps: browserProps
	            }, _this2.props.folderRendererProps)));
	          }
	          if (_this2.state.nameFilter || thisItemProps.isOpen && !browserProps.nestChildren) {
	            renderedFiles = renderedFiles.concat(_this2.renderFiles(file.children, depth + 1));
	          }
	        }
	      });
	      return renderedFiles;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var browserProps = this.getBrowserProps();
	      var headerProps = {
	        fileKey: '',
	        browserProps: browserProps
	      };
	      var renderedFiles = void 0;

	      var files = this.props.files.concat([]);
	      if (this.state.activeAction === 'createFolder') {
	        files.push({
	          key: this.state.actionTarget,
	          size: 0,
	          draft: true
	        });
	      }
	      if (this.state.nameFilter) {
	        var filteredFiles = [];
	        var terms = this.state.nameFilter.toLowerCase().split(' ');
	        files.map(function (file) {
	          var skip = false;
	          terms.map(function (term) {
	            if (file.key.toLowerCase().trim().indexOf(term) === -1) {
	              skip = true;
	            }
	          });
	          if (skip) {
	            return;
	          }
	          filteredFiles.push(file);
	        });
	        files = filteredFiles;
	      }
	      if (typeof this.props.group === 'function') {
	        files = this.props.group(files, '');
	      } else {
	        var newFiles = [];
	        files.map(function (file) {
	          if (file.size) {
	            newFiles.push(file);
	          }
	        });
	        files = newFiles;
	      }
	      var selectedItem = null;
	      var findSelected = function findSelected(item) {
	        if (item.key === _this3.state.selection) {
	          selectedItem = item;
	        }
	        if (item.children) {
	          item.children.map(findSelected);
	        }
	      };
	      files.map(findSelected);
	      if (typeof this.props.sort === 'function') {
	        files = this.props.sort(files);
	      }

	      var header = void 0;
	      var contents = this.renderFiles(files, 0);
	      switch (this.props.renderStyle) {
	        case 'table':
	          if (!contents.length) {
	            if (this.state.nameFilter) {
	              contents = _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  { colSpan: '100' },
	                  'No files matching "',
	                  this.state.nameFilter,
	                  '".'
	                )
	              );
	            } else {
	              contents = _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  { colSpan: '100' },
	                  'No files.'
	                )
	              );
	            }
	          } else {
	            if (this.state.nameFilter) {
	              var numFiles = contents.length;
	              contents = contents.slice(0, this.state.searchResultsShown);
	              if (numFiles > contents.length) {
	                contents.push(_react2.default.createElement(
	                  'tr',
	                  { key: 'show-more' },
	                  _react2.default.createElement(
	                    'td',
	                    { colSpan: '100' },
	                    _react2.default.createElement(
	                      'a',
	                      {
	                        onClick: this.handleShowMoreClick,
	                        href: '#'
	                      },
	                      'Show more results'
	                    )
	                  )
	                ));
	              }
	            }
	          }

	          if (this.props.headerRenderer) {
	            header = _react2.default.createElement(
	              'thead',
	              null,
	              _react2.default.createElement(this.props.headerRenderer, _extends({}, headerProps, this.props.headerRendererProps))
	            );
	          }

	          renderedFiles = _react2.default.createElement(
	            'table',
	            { cellSpacing: '0', cellPadding: '0' },
	            header,
	            _react2.default.createElement(
	              'tbody',
	              null,
	              contents
	            )
	          );
	          break;

	        case 'list':
	          if (!contents.length) {
	            if (this.state.nameFilter) {
	              contents = _react2.default.createElement(
	                'p',
	                { className: 'empty' },
	                'No files matching "',
	                this.state.nameFilter,
	                '"'
	              );
	            } else {
	              contents = _react2.default.createElement(
	                'p',
	                { className: 'empty' },
	                'No files.'
	              );
	            }
	          } else {
	            var more = void 0;
	            if (this.state.nameFilter) {
	              var _numFiles = contents.length;
	              contents = contents.slice(0, this.state.searchResultsShown);
	              if (_numFiles > contents.length) {
	                more = _react2.default.createElement(
	                  'a',
	                  {
	                    onClick: this.handleShowMoreClick,
	                    href: '#'
	                  },
	                  'Show more results'
	                );
	              }
	            }
	            contents = _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(
	                'ul',
	                null,
	                contents
	              ),
	              more
	            );
	          }

	          if (this.props.headerRenderer) {
	            header = _react2.default.createElement(this.props.headerRenderer, _extends({}, headerProps, this.props.headerRendererProps));
	          }

	          renderedFiles = _react2.default.createElement(
	            'div',
	            null,
	            header,
	            contents
	          );
	          break;
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: 'rendered-react-keyed-file-browser' },
	        this.props.actions,
	        _react2.default.createElement(
	          'div',
	          { className: 'rendered-file-browser', ref: 'browser' },
	          this.props.showActionBar && this.renderActionBar(selectedItem),
	          _react2.default.createElement(
	            'div',
	            { className: 'files' },
	            renderedFiles
	          )
	        ),
	        this.state.previewFile !== null && _react2.default.createElement(this.props.detailRenderer, _extends({
	          file: this.state.previewFile,
	          close: this.closeDetail
	        }, this.props.detailRendererProps))
	      );
	    }
	  }]);

	  return RawFileBrowser;
	}(_react2.default.Component), _class.propTypes = {
	  files: _propTypes2.default.array.isRequired,
	  actions: _propTypes2.default.node,
	  showActionBar: _propTypes2.default.bool.isRequired,
	  canFilter: _propTypes2.default.bool.isRequired,

	  group: _propTypes2.default.func.isRequired,
	  sort: _propTypes2.default.func.isRequired,

	  nestChildren: _propTypes2.default.bool.isRequired,
	  renderStyle: _propTypes2.default.oneOf(['list', 'table']).isRequired,

	  startOpen: _propTypes2.default.bool.isRequired, // TODO: remove?

	  headerRenderer: _propTypes2.default.func,
	  headerRendererProps: _propTypes2.default.object,
	  filterRenderer: _propTypes2.default.func,
	  filterRendererProps: _propTypes2.default.object,
	  fileRenderer: _propTypes2.default.func,
	  fileRendererProps: _propTypes2.default.object,
	  folderRenderer: _propTypes2.default.func,
	  folderRendererProps: _propTypes2.default.object,
	  detailRenderer: _propTypes2.default.func,
	  detailRendererProps: _propTypes2.default.object,

	  onCreateFiles: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.bool]),
	  onCreateFolder: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.bool]),
	  onMoveFile: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.bool]),
	  onMoveFolder: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.bool]),
	  onRenameFile: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.bool]),
	  onRenameFolder: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.bool]),
	  onDeleteFile: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.bool]),
	  onDeleteFolder: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.bool])
	}, _class.defaultProps = {
	  showActionBar: true,
	  canFilter: true,

	  group: _groupers.GroupByFolder,
	  sort: _sorters.SortByName,

	  nestChildren: false,
	  renderStyle: 'table',

	  startOpen: false,

	  headerRenderer: _headers.TableHeader,
	  headerRendererProps: {},
	  filterRenderer: _filters.DefaultFilter,
	  filterRendererProps: {},
	  fileRenderer: _files.TableFile,
	  fileRendererProps: {},
	  folderRenderer: _folders.TableFolder,
	  folderRendererProps: {},
	  detailRenderer: _details.DefaultDetail,
	  detailRendererProps: {}
	}, _temp2);
	var FileBrowser = (_dec = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default), _dec(_class2 = function (_RawFileBrowser) {
	  _inherits(FileBrowser, _RawFileBrowser);

	  function FileBrowser() {
	    _classCallCheck(this, FileBrowser);

	    return _possibleConstructorReturn(this, (FileBrowser.__proto__ || Object.getPrototypeOf(FileBrowser)).apply(this, arguments));
	  }

	  return FileBrowser;
	}(RawFileBrowser)) || _class2);
	exports.default = FileBrowser;
	exports.RawFileBrowser = RawFileBrowser;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("react-dnd-html5-backend");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("react-dnd");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DefaultDetail = undefined;

	var _default = __webpack_require__(7);

	var _default2 = _interopRequireDefault(_default);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.DefaultDetail = _default2.default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp2;

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Detail = (_temp2 = _class = function (_React$Component) {
	  _inherits(Detail, _React$Component);

	  function Detail() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Detail);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Detail.__proto__ || Object.getPrototypeOf(Detail)).call.apply(_ref, [this].concat(args))), _this), _this.handleCloseClick = function (event) {
	      if (event) {
	        event.preventDefault();
	      }
	      _this.props.close();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Detail, [{
	    key: 'render',
	    value: function render() {
	      var name = this.props.file.key.split('/');
	      name = name.length ? name[name.length - 1] : '';

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Item Detail'
	        ),
	        _react2.default.createElement(
	          'dl',
	          null,
	          _react2.default.createElement(
	            'dt',
	            null,
	            'Key'
	          ),
	          _react2.default.createElement(
	            'dd',
	            null,
	            this.props.file.key
	          ),
	          _react2.default.createElement(
	            'dt',
	            null,
	            'Name'
	          ),
	          _react2.default.createElement(
	            'dd',
	            null,
	            name
	          )
	        ),
	        _react2.default.createElement(
	          'a',
	          { href: '#', onClick: this.handleCloseClick },
	          'Close'
	        )
	      );
	    }
	  }]);

	  return Detail;
	}(_react2.default.Component), _class.propTypes = {
	  file: _propTypes2.default.shape({
	    key: _propTypes2.default.string.isRequired,
	    name: _propTypes2.default.string.isRequired,
	    extension: _propTypes2.default.string.isRequired,
	    url: _propTypes2.default.string
	  }).isRequired,
	  close: _propTypes2.default.func
	}, _temp2);
	exports.default = Detail;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DefaultFilter = undefined;

	var _default = __webpack_require__(9);

	var _default2 = _interopRequireDefault(_default);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.DefaultFilter = _default2.default;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp2;

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Filter = (_temp2 = _class = function (_React$Component) {
	  _inherits(Filter, _React$Component);

	  function Filter() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Filter);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Filter.__proto__ || Object.getPrototypeOf(Filter)).call.apply(_ref, [this].concat(args))), _this), _this.handleFilterChange = function (event) {
	      var newValue = _this.refs.filter.value;
	      _this.props.updateFilter(newValue);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Filter, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('input', {
	        ref: 'filter',
	        type: 'search',
	        placeholder: 'Filter files',
	        value: this.props.value,
	        onChange: this.handleFilterChange
	      });
	    }
	  }]);

	  return Filter;
	}(_react2.default.Component), _class.propTypes = {
	  value: _propTypes2.default.string.isRequired,
	  updateFilter: _propTypes2.default.func
	}, _temp2);
	exports.default = Filter;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TableHeader = undefined;

	var _table = __webpack_require__(11);

	var _table2 = _interopRequireDefault(_table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.TableHeader = _table2.default;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RawTableHeader = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp, _dec, _class2;

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(12);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactDnd = __webpack_require__(5);

	var _reactDndHtml5Backend = __webpack_require__(4);

	var _baseFile = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RawTableHeader = (_temp = _class = function (_React$Component) {
	  _inherits(RawTableHeader, _React$Component);

	  function RawTableHeader() {
	    _classCallCheck(this, RawTableHeader);

	    return _possibleConstructorReturn(this, (RawTableHeader.__proto__ || Object.getPrototypeOf(RawTableHeader)).apply(this, arguments));
	  }

	  _createClass(RawTableHeader, [{
	    key: 'handleHeaderClick',
	    value: function handleHeaderClick(event) {
	      this.props.select(this.props.fileKey);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var header = _react2.default.createElement(
	        'tr',
	        {
	          className: (0, _classnames2.default)('folder', {
	            dragover: this.props.isOver,
	            selected: this.props.isSelected
	          })
	        },
	        _react2.default.createElement(
	          'th',
	          null,
	          'File'
	        ),
	        _react2.default.createElement(
	          'th',
	          { className: 'size' },
	          'Size'
	        ),
	        _react2.default.createElement(
	          'th',
	          { className: 'modified' },
	          'Last Modified'
	        )
	      );

	      if (typeof this.props.browserProps.createFiles === 'function' || typeof this.props.browserProps.moveFile === 'function' || typeof this.props.browserProps.moveFolder === 'function') {
	        return this.props.connectDropTarget(header);
	      } else {
	        return header;
	      }
	    }
	  }]);

	  return RawTableHeader;
	}(_react2.default.Component), _class.propTypes = {
	  select: _propTypes2.default.func,
	  fileKey: _propTypes2.default.string,

	  connectDropTarget: _propTypes2.default.func,
	  isOver: _propTypes2.default.bool,
	  isSelected: _propTypes2.default.func,

	  browserProps: _propTypes2.default.shape({
	    createFiles: _propTypes2.default.func,
	    moveFolder: _propTypes2.default.func,
	    moveFile: _propTypes2.default.func
	  })
	}, _temp);
	var TableHeader = (_dec = (0, _reactDnd.DropTarget)(['file', 'folder', _reactDndHtml5Backend.NativeTypes.FILE], _baseFile.BaseFileConnectors.targetSource, _baseFile.BaseFileConnectors.targetCollect), _dec(_class2 = function (_RawTableHeader) {
	  _inherits(TableHeader, _RawTableHeader);

	  function TableHeader() {
	    _classCallCheck(this, TableHeader);

	    return _possibleConstructorReturn(this, (TableHeader.__proto__ || Object.getPrototypeOf(TableHeader)).apply(this, arguments));
	  }

	  return TableHeader;
	}(RawTableHeader)) || _class2);
	exports.default = TableHeader;
	exports.RawTableHeader = RawTableHeader;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = require("classnames");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BaseFileConnectors = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp2;

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _constants = __webpack_require__(14);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BaseFile = (_temp2 = _class = function (_React$Component) {
	  _inherits(BaseFile, _React$Component);

	  function BaseFile() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, BaseFile);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BaseFile.__proto__ || Object.getPrototypeOf(BaseFile)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      newName: _this.getName()
	    }, _this.handleFileClick = function (event) {
	      if (event) {
	        event.preventDefault();
	      }
	      _this.props.browserProps.preview({
	        url: _this.props.url,
	        name: _this.getName(),
	        key: _this.props.fileKey,
	        extension: _this.getExtension()
	      });
	    }, _this.handleItemClick = function (event) {
	      event.stopPropagation();
	      _this.props.browserProps.select(_this.props.fileKey);
	    }, _this.handleItemDoubleClick = function (event) {
	      event.stopPropagation();
	      _this.handleFileClick();
	    }, _this.handleRenameClick = function (event) {
	      if (!_this.props.browserProps.renameFile) {
	        return;
	      }
	      _this.props.browserProps.beginAction('rename', _this.props.fileKey);
	    }, _this.handleNewNameChange = function (event) {
	      var newName = _this.refs.newName.value;
	      _this.setState({ newName: newName });
	    }, _this.handleRenameSubmit = function (event) {
	      if (event) {
	        event.preventDefault();
	      }
	      if (!_this.props.browserProps.renameFile) {
	        return;
	      }
	      var newName = _this.state.newName.trim();
	      if (newName.length === 0) {
	        // todo: move to props handler
	        // window.notify({
	        //   style: 'error',
	        //   title: 'Invalid new file name',
	        //   body: 'File name cannot be blank',
	        // })
	        return;
	      }
	      if (newName.indexOf('/') !== -1) {
	        // todo: move to props handler
	        // window.notify({
	        //   style: 'error',
	        //   title: 'Invalid new file name',
	        //   body: 'File names cannot contain forward slashes.',
	        // })
	        return;
	      }
	      var newKey = newName;
	      var slashIndex = _this.props.fileKey.lastIndexOf('/');
	      if (slashIndex !== -1) {
	        newKey = _this.props.fileKey.substr(0, slashIndex) + '/' + newName;
	      }
	      _this.props.browserProps.renameFile(_this.props.fileKey, newKey);
	    }, _this.handleDeleteClick = function (event) {
	      if (!_this.props.browserProps.deleteFile) {
	        return;
	      }
	      _this.props.browserProps.beginAction('delete', _this.props.fileKey);
	    }, _this.handleDeleteSubmit = function (event) {
	      event.preventDefault();
	      if (!_this.props.browserProps.deleteFile) {
	        return;
	      }
	      _this.props.browserProps.deleteFile(_this.props.fileKey);
	    }, _this.handleCancelEdit = function (event) {
	      _this.props.browserProps.endAction();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(BaseFile, [{
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(oldProps, oldState) {
	      var _this2 = this;

	      if (!oldProps.isRenaming && this.props.isRenaming) {
	        window.requestAnimationFrame(function () {
	          var currentName = _this2.refs.newName.value;
	          var pointIndex = currentName.lastIndexOf('.');
	          _this2.refs.newName.setSelectionRange(0, pointIndex || currentName.length);
	          _this2.refs.newName.focus();
	        });
	      }
	    }
	  }, {
	    key: 'getName',
	    value: function getName() {
	      var name = this.props.newKey || this.props.fileKey;
	      var slashIndex = name.lastIndexOf('/');
	      if (slashIndex !== -1) {
	        name = name.substr(slashIndex + 1);
	      }
	      return name;
	    }
	  }, {
	    key: 'getExtension',
	    value: function getExtension() {
	      var blobs = this.props.fileKey.split('.');
	      return blobs[blobs.length - 1].toLowerCase().trim();
	    }
	  }, {
	    key: 'isImage',
	    value: function isImage() {
	      var extension = this.getExtension();
	      for (var extensionIndex = 0; extensionIndex < _constants.IMAGE_EXTENSIONS.length; extensionIndex++) {
	        var imageExtension = _constants.IMAGE_EXTENSIONS[extensionIndex];
	        if (extension === imageExtension) {
	          return true;
	        }
	      }
	      return false;
	    }
	  }, {
	    key: 'isPdf',
	    value: function isPdf() {
	      return this.getExtension() === 'pdf';
	    }
	  }, {
	    key: 'connectDND',
	    value: function connectDND(render) {
	      var inAction = this.props.isDragging || this.props.action;
	      if (typeof this.props.browserProps.moveFile === 'function' && !inAction && !this.props.isRenaming) {
	        render = this.props.connectDragSource(render);
	      }
	      if (typeof this.props.browserProps.createFiles === 'function' || typeof this.props.browserProps.moveFile === 'function' || typeof this.props.browserProps.moveFolder === 'function') {
	        render = this.props.connectDropTarget(render);
	      }
	      return render;
	    }
	  }]);

	  return BaseFile;
	}(_react2.default.Component), _class.propTypes = {
	  fileKey: _propTypes2.default.string,
	  url: _propTypes2.default.string,

	  newKey: _propTypes2.default.string,
	  isRenaming: _propTypes2.default.bool,

	  connectDragSource: _propTypes2.default.func,
	  connectDropTarget: _propTypes2.default.func,
	  isDragging: _propTypes2.default.bool,
	  action: _propTypes2.default.func,

	  browserProps: _propTypes2.default.shape({
	    select: _propTypes2.default.func,
	    beginAction: _propTypes2.default.func,
	    endAction: _propTypes2.default.func,
	    preview: _propTypes2.default.func,

	    createFiles: _propTypes2.default.func,
	    moveFile: _propTypes2.default.func,
	    moveFolder: _propTypes2.default.func,
	    renameFile: _propTypes2.default.func,
	    deleteFile: _propTypes2.default.func
	  })
	}, _temp2);


	var dragSource = {
	  beginDrag: function beginDrag(props) {
	    props.browserProps.select(props.fileKey);
	    return {
	      key: props.fileKey
	    };
	  },
	  endDrag: function endDrag(props, monitor, component) {
	    if (!monitor.didDrop()) return;

	    var dropResult = monitor.getDropResult();
	    var fileNameParts = props.fileKey.split('/');
	    var fileName = fileNameParts[fileNameParts.length - 1];
	    var newKey = '' + dropResult.path + fileName;
	    if (newKey !== props.fileKey && props.browserProps.renameFile) {
	      props.browserProps.openFolder(dropResult.path);
	      props.browserProps.renameFile(props.fileKey, newKey);
	    }
	  }
	};

	function dragCollect(connect, monitor) {
	  return {
	    connectDragPreview: connect.dragPreview(),
	    connectDragSource: connect.dragSource(),
	    isDragging: monitor.isDragging()
	  };
	}

	var targetSource = {
	  drop: function drop(props, monitor) {
	    if (monitor.didDrop()) {
	      return;
	    }
	    var key = props.newKey || props.fileKey;
	    var slashIndex = key.lastIndexOf('/');
	    var path = slashIndex !== -1 ? key.substr(0, slashIndex + 1) : '';
	    var item = monitor.getItem();
	    if (item.files && props.browserProps.createFiles) {
	      props.browserProps.createFiles(item.files, path);
	    }
	    return {
	      path: path
	    };
	  }
	};

	function targetCollect(connect, monitor) {
	  return {
	    connectDropTarget: connect.dropTarget(),
	    isOver: monitor.isOver({ shallow: true })
	  };
	}

	var BaseFileConnectors = {
	  dragSource: dragSource,
	  dragCollect: dragCollect,
	  targetSource: targetSource,
	  targetCollect: targetCollect
	};

	exports.default = BaseFile;
	exports.BaseFileConnectors = BaseFileConnectors;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'bmp'];

	exports.IMAGE_EXTENSIONS = IMAGE_EXTENSIONS;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RawTableFile = exports.RawListThumbnailFile = exports.TableFile = exports.SimpleListThumbnailFile = exports.ListThumbnailFile = undefined;

	var _listThumbnail = __webpack_require__(16);

	var _listThumbnail2 = _interopRequireDefault(_listThumbnail);

	var _simpleListThumbnail = __webpack_require__(19);

	var _simpleListThumbnail2 = _interopRequireDefault(_simpleListThumbnail);

	var _table = __webpack_require__(20);

	var _table2 = _interopRequireDefault(_table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.ListThumbnailFile = _listThumbnail2.default;
	exports.SimpleListThumbnailFile = _simpleListThumbnail2.default;
	exports.TableFile = _table2.default;
	exports.RawListThumbnailFile = _listThumbnail.RawListThumbnailFile;
	exports.RawTableFile = _table.RawTableFile;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RawListThumbnailFile = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp, _dec, _dec2, _class2;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(17);

	var _moment2 = _interopRequireDefault(_moment);

	var _classnames = __webpack_require__(12);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactDnd = __webpack_require__(5);

	var _reactDndHtml5Backend = __webpack_require__(4);

	var _baseFile = __webpack_require__(13);

	var _baseFile2 = _interopRequireDefault(_baseFile);

	var _utils = __webpack_require__(18);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RawListThumbnailFile = (_temp = _class = function (_BaseFile) {
	  _inherits(RawListThumbnailFile, _BaseFile);

	  function RawListThumbnailFile() {
	    _classCallCheck(this, RawListThumbnailFile);

	    return _possibleConstructorReturn(this, (RawListThumbnailFile.__proto__ || Object.getPrototypeOf(RawListThumbnailFile)).apply(this, arguments));
	  }

	  _createClass(RawListThumbnailFile, [{
	    key: 'render',
	    value: function render() {
	      var icon = void 0;
	      if (this.props.thumbnail_url) {
	        icon = _react2.default.createElement('div', { className: 'image', style: {
	            backgroundImage: 'url(' + this.props.thumbnail_url + ')'
	          } });
	      } else if (this.isImage()) {
	        icon = _react2.default.createElement('i', { className: 'fa fa-file-image-o', 'aria-hidden': 'true' });
	      } else if (this.isPdf()) {
	        icon = _react2.default.createElement('i', { className: 'fa fa-file-pdf-o', 'aria-hidden': 'true' });
	      } else {
	        icon = _react2.default.createElement('i', { className: 'fa fa-file-o', 'aria-hidden': 'true' });
	      }

	      var inAction = this.props.isDragging || this.props.action;

	      var name = void 0;
	      if (this.props.showName) {
	        if (!inAction && this.props.isDeleting) {
	          name = _react2.default.createElement(
	            'form',
	            { className: 'deleting', onSubmit: this.handleDeleteSubmit },
	            _react2.default.createElement(
	              'a',
	              {
	                href: this.props.url,
	                download: 'download',
	                onClick: this.handleFileClick
	              },
	              this.getName()
	            ),
	            _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(
	                'button',
	                { type: 'submit' },
	                'Confirm Deletion'
	              )
	            )
	          );
	        } else if (!inAction && this.props.isRenaming) {
	          name = _react2.default.createElement(
	            'form',
	            { className: 'renaming', onSubmit: this.handleRenameSubmit },
	            _react2.default.createElement('input', {
	              ref: 'newName',
	              type: 'text',
	              value: this.state.newName,
	              onChange: this.handleNewNameChange,
	              onBlur: this.handleCancelEdit,
	              autoFocus: true
	            })
	          );
	        } else {
	          name = _react2.default.createElement(
	            'a',
	            { href: this.props.url, download: 'download', onClick: this.handleFileClick },
	            this.getName()
	          );
	        }
	      }

	      var size = void 0;
	      if (this.props.showSize) {
	        if (!this.props.isRenaming && !this.props.isDeleting) {
	          size = _react2.default.createElement(
	            'span',
	            { className: 'size' },
	            _react2.default.createElement(
	              'small',
	              null,
	              (0, _utils.fileSize)(this.props.size)
	            )
	          );
	        }
	      }
	      var modified = void 0;
	      if (this.props.showModified) {
	        if (!this.props.isRenaming && !this.props.isDeleting) {
	          modified = _react2.default.createElement(
	            'span',
	            { className: 'modified' },
	            'Last modified: ',
	            (0, _moment2.default)(this.props.modified).fromNow()
	          );
	        }
	      }

	      var rowProps = {};
	      if (this.props.isSelectable) {
	        rowProps = {
	          onClick: this.handleItemClick
	        };
	      }

	      var row = _react2.default.createElement(
	        'li',
	        _extends({
	          className: (0, _classnames2.default)('file', {
	            pending: this.props.action,
	            dragging: this.props.isDragging,
	            dragover: this.props.isOver,
	            selected: this.props.isSelected
	          }),
	          onDoubleClick: this.handleItemDoubleClick
	        }, rowProps),
	        _react2.default.createElement(
	          'div',
	          { className: 'item' },
	          _react2.default.createElement(
	            'span',
	            { className: 'thumb' },
	            icon
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: 'name' },
	            name
	          ),
	          size,
	          modified
	        )
	      );
	      if (typeof this.props.browserProps.moveFile === 'function') {
	        row = this.props.connectDragPreview(row);
	      }

	      return this.connectDND(row);
	    }
	  }]);

	  return RawListThumbnailFile;
	}(_baseFile2.default), _class.defaultProps = {
	  showName: true,
	  showSize: true,
	  showModified: true,
	  isSelectable: true
	}, _temp);
	var ListThumbnailFile = (_dec = (0, _reactDnd.DragSource)('file', _baseFile.BaseFileConnectors.dragSource, _baseFile.BaseFileConnectors.dragCollect), _dec2 = (0, _reactDnd.DropTarget)(['file', 'folder', _reactDndHtml5Backend.NativeTypes.FILE], _baseFile.BaseFileConnectors.targetSource, _baseFile.BaseFileConnectors.targetCollect), _dec(_class2 = _dec2(_class2 = function (_RawListThumbnailFile) {
	  _inherits(ListThumbnailFile, _RawListThumbnailFile);

	  function ListThumbnailFile() {
	    _classCallCheck(this, ListThumbnailFile);

	    return _possibleConstructorReturn(this, (ListThumbnailFile.__proto__ || Object.getPrototypeOf(ListThumbnailFile)).apply(this, arguments));
	  }

	  return ListThumbnailFile;
	}(RawListThumbnailFile)) || _class2) || _class2);
	exports.default = ListThumbnailFile;
	exports.RawListThumbnailFile = RawListThumbnailFile;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = require("moment");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function floatPrecision(floatValue, precision) {
	  floatValue = parseFloat(floatValue);
	  if (isNaN(floatValue)) {
	    return parseFloat('0').toFixed(precision);
	  } else {
	    var power = Math.pow(10, precision);
	    floatValue = (Math.round(floatValue * power) / power).toFixed(precision);
	    return floatValue.toString();
	  }
	}

	function fileSize(size) {
	  if (size > 1024) {
	    var kbSize = size / 1024;
	    if (kbSize > 1024) {
	      var mbSize = kbSize / 1024;
	      return floatPrecision(mbSize, 2) + ' MB';
	    }
	    return Math.round(kbSize) + ' kB';
	  }
	  return size + ' B';
	}

	exports.floatPrecision = floatPrecision;
	exports.fileSize = fileSize;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _listThumbnail = __webpack_require__(16);

	var _listThumbnail2 = _interopRequireDefault(_listThumbnail);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SimpleListThumbnailFile = function (_React$Component) {
	  _inherits(SimpleListThumbnailFile, _React$Component);

	  function SimpleListThumbnailFile() {
	    _classCallCheck(this, SimpleListThumbnailFile);

	    return _possibleConstructorReturn(this, (SimpleListThumbnailFile.__proto__ || Object.getPrototypeOf(SimpleListThumbnailFile)).apply(this, arguments));
	  }

	  _createClass(SimpleListThumbnailFile, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_listThumbnail2.default, _extends({}, this.props, {
	        showName: false,
	        showSize: false,
	        showModified: false,
	        isSelectable: false
	      }));
	    }
	  }]);

	  return SimpleListThumbnailFile;
	}(_react2.default.Component);

	exports.default = SimpleListThumbnailFile;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RawTableFile = undefined;

	var _dec, _dec2, _class;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(17);

	var _moment2 = _interopRequireDefault(_moment);

	var _classnames = __webpack_require__(12);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactDnd = __webpack_require__(5);

	var _reactDndHtml5Backend = __webpack_require__(4);

	var _baseFile = __webpack_require__(13);

	var _baseFile2 = _interopRequireDefault(_baseFile);

	var _utils = __webpack_require__(18);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RawTableFile = function (_BaseFile) {
	  _inherits(RawTableFile, _BaseFile);

	  function RawTableFile() {
	    _classCallCheck(this, RawTableFile);

	    return _possibleConstructorReturn(this, (RawTableFile.__proto__ || Object.getPrototypeOf(RawTableFile)).apply(this, arguments));
	  }

	  _createClass(RawTableFile, [{
	    key: 'render',
	    value: function render() {
	      var icon = void 0;
	      if (this.isImage()) {
	        icon = _react2.default.createElement('i', { className: 'fa fa-file-image-o', 'aria-hidden': 'true' });
	      } else if (this.isPdf()) {
	        icon = _react2.default.createElement('i', { className: 'fa fa-file-pdf-o', 'aria-hidden': 'true' });
	      } else {
	        icon = _react2.default.createElement('i', { className: 'fa fa-file-o', 'aria-hidden': 'true' });
	      }

	      var inAction = this.props.isDragging || this.props.action;

	      var name = void 0;
	      if (!inAction && this.props.isDeleting) {
	        name = _react2.default.createElement(
	          'form',
	          { className: 'deleting', onSubmit: this.handleDeleteSubmit },
	          _react2.default.createElement(
	            'a',
	            {
	              href: this.props.url || '#',
	              download: 'download',
	              onClick: this.handleFileClick
	            },
	            icon,
	            this.getName()
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'button',
	              { type: 'submit' },
	              'Confirm Deletion'
	            )
	          )
	        );
	      } else if (!inAction && this.props.isRenaming) {
	        name = _react2.default.createElement(
	          'form',
	          { className: 'renaming', onSubmit: this.handleRenameSubmit },
	          icon,
	          _react2.default.createElement('input', {
	            ref: 'newName',
	            type: 'text',
	            value: this.state.newName,
	            onChange: this.handleNewNameChange,
	            onBlur: this.handleCancelEdit,
	            autoFocus: true
	          })
	        );
	      } else {
	        name = _react2.default.createElement(
	          'a',
	          {
	            href: this.props.url || '#',
	            download: 'download',
	            onClick: this.handleFileClick
	          },
	          icon,
	          this.getName()
	        );
	      }

	      var draggable = _react2.default.createElement(
	        'div',
	        null,
	        name
	      );
	      if (typeof this.props.browserProps.moveFile === 'function') {
	        draggable = this.props.connectDragPreview(draggable);
	      }

	      var row = _react2.default.createElement(
	        'tr',
	        {
	          className: (0, _classnames2.default)('file', {
	            pending: this.props.action,
	            dragging: this.props.isDragging,
	            dragover: this.props.isOver,
	            selected: this.props.isSelected
	          }),
	          onClick: this.handleItemClick,
	          onDoubleClick: this.handleItemDoubleClick
	        },
	        _react2.default.createElement(
	          'td',
	          { className: 'name' },
	          _react2.default.createElement(
	            'div',
	            { style: { paddingLeft: this.props.depth * 16 + 'px' } },
	            draggable
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          { className: 'size' },
	          (0, _utils.fileSize)(this.props.size)
	        ),
	        _react2.default.createElement(
	          'td',
	          { className: 'modified' },
	          typeof this.props.modified === 'undefined' ? '-' : (0, _moment2.default)(this.props.modified, 'x').fromNow()
	        )
	      );

	      return this.connectDND(row);
	    }
	  }]);

	  return RawTableFile;
	}(_baseFile2.default);

	var TableFile = (_dec = (0, _reactDnd.DragSource)('file', _baseFile.BaseFileConnectors.dragSource, _baseFile.BaseFileConnectors.dragCollect), _dec2 = (0, _reactDnd.DropTarget)(['file', 'folder', _reactDndHtml5Backend.NativeTypes.FILE], _baseFile.BaseFileConnectors.targetSource, _baseFile.BaseFileConnectors.targetCollect), _dec(_class = _dec2(_class = function (_RawTableFile) {
	  _inherits(TableFile, _RawTableFile);

	  function TableFile() {
	    _classCallCheck(this, TableFile);

	    return _possibleConstructorReturn(this, (TableFile.__proto__ || Object.getPrototypeOf(TableFile)).apply(this, arguments));
	  }

	  return TableFile;
	}(RawTableFile)) || _class) || _class);
	exports.default = TableFile;
	exports.RawTableFile = RawTableFile;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RawTableFolder = exports.RawListThumbnailFolder = exports.TableFolder = exports.ListThumbnailFolder = undefined;

	var _listThumbnail = __webpack_require__(22);

	var _listThumbnail2 = _interopRequireDefault(_listThumbnail);

	var _table = __webpack_require__(24);

	var _table2 = _interopRequireDefault(_table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.ListThumbnailFolder = _listThumbnail2.default;
	exports.TableFolder = _table2.default;
	exports.RawListThumbnailFolder = _listThumbnail.RawListThumbnailFolder;
	exports.RawTableFolder = _table.RawTableFolder;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RawListThumbnailFolder = undefined;

	var _dec, _dec2, _class;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(12);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactDnd = __webpack_require__(5);

	var _reactDndHtml5Backend = __webpack_require__(4);

	var _baseFolder = __webpack_require__(23);

	var _baseFolder2 = _interopRequireDefault(_baseFolder);

	var _baseFile = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RawListThumbnailFolder = function (_BaseFolder) {
	  _inherits(RawListThumbnailFolder, _BaseFolder);

	  function RawListThumbnailFolder() {
	    _classCallCheck(this, RawListThumbnailFolder);

	    return _possibleConstructorReturn(this, (RawListThumbnailFolder.__proto__ || Object.getPrototypeOf(RawListThumbnailFolder)).apply(this, arguments));
	  }

	  _createClass(RawListThumbnailFolder, [{
	    key: 'render',
	    value: function render() {
	      var icon = _react2.default.createElement('i', { className: 'fa fa-folder' + (this.props.isOpen ? '-open' : '') + '-o', 'aria-hidden': 'true' });

	      var inAction = this.props.isDragging || this.props.action;

	      var name = void 0;
	      if (!inAction && this.props.isDeleting) {
	        name = _react2.default.createElement(
	          'form',
	          { className: 'deleting', onSubmit: this.handleDeleteSubmit },
	          _react2.default.createElement(
	            'a',
	            {
	              href: this.props.url,
	              download: 'download',
	              onClick: this.handleFileClick
	            },
	            this.getName()
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'button',
	              { type: 'submit' },
	              'Confirm Deletion'
	            )
	          )
	        );
	      } else if (!inAction && this.props.isRenaming || this.props.isDraft) {
	        name = _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'form',
	            { className: 'renaming', onSubmit: this.handleRenameSubmit },
	            _react2.default.createElement('input', {
	              type: 'text',
	              ref: 'newName',
	              value: this.state.newName,
	              onChange: this.handleNewNameChange,
	              onBlur: this.handleCancelEdit,
	              autoFocus: true
	            })
	          )
	        );
	      } else {
	        name = _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'a',
	            { onClick: this.toggleFolder },
	            this.getName()
	          )
	        );
	      }

	      var children = void 0;
	      if (this.props.isOpen && this.props.browserProps.nestChildren) {
	        children = [];
	        for (var childIndex = 0; childIndex < this.props.children.length; childIndex++) {
	          var file = this.props.children[childIndex];

	          var thisItemProps = _extends({}, this.props.browserProps.getItemProps(file, this.props.browserProps), {
	            depth: this.props.depth + 1
	          });

	          if (file.size) {
	            children.push(_react2.default.createElement(this.props.browserProps.fileRenderer, _extends({}, file, thisItemProps, {
	              browserProps: this.props.browserProps
	            }, this.props.browserProps.fileRendererProps)));
	          } else {
	            children.push(_react2.default.createElement(this.props.browserProps.folderRenderer, _extends({}, file, thisItemProps, {
	              browserProps: this.props.browserProps
	            }, this.props.browserProps.folderRendererProps)));
	          }
	        }
	        if (children.length) {
	          children = _react2.default.createElement(
	            'ul',
	            { style: { padding: '0 8px', paddingLeft: '16px' } },
	            children
	          );
	        } else {
	          children = _react2.default.createElement(
	            'p',
	            null,
	            'No items in this folder'
	          );
	        }
	      }

	      var folder = _react2.default.createElement(
	        'li',
	        {
	          className: (0, _classnames2.default)('folder', {
	            expanded: this.props.isOpen && this.props.browserProps.nestChildren,
	            pending: this.props.action,
	            dragging: this.props.isDragging,
	            dragover: this.props.isOver,
	            selected: this.props.isSelected
	          }),
	          onClick: this.handleFolderClick,
	          onDoubleClick: this.handleFolderDoubleClick
	        },
	        _react2.default.createElement(
	          'div',
	          { className: 'item' },
	          _react2.default.createElement(
	            'span',
	            { className: 'thumb' },
	            icon
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: 'name' },
	            name
	          )
	        ),
	        children
	      );
	      if (typeof this.props.browserProps.moveFolder === 'function' && this.props.keyDerived) {
	        folder = this.props.connectDragPreview(folder);
	      }

	      return this.connectDND(folder);
	    }
	  }]);

	  return RawListThumbnailFolder;
	}(_baseFolder2.default);

	var ListThumbnailFolder = (_dec = (0, _reactDnd.DragSource)('folder', _baseFolder.BaseFolderConnectors.dragSource, _baseFolder.BaseFolderConnectors.dragCollect), _dec2 = (0, _reactDnd.DropTarget)(['file', 'folder', _reactDndHtml5Backend.NativeTypes.FILE], _baseFile.BaseFileConnectors.targetSource, _baseFile.BaseFileConnectors.targetCollect), _dec(_class = _dec2(_class = function (_RawListThumbnailFold) {
	  _inherits(ListThumbnailFolder, _RawListThumbnailFold);

	  function ListThumbnailFolder() {
	    _classCallCheck(this, ListThumbnailFolder);

	    return _possibleConstructorReturn(this, (ListThumbnailFolder.__proto__ || Object.getPrototypeOf(ListThumbnailFolder)).apply(this, arguments));
	  }

	  return ListThumbnailFolder;
	}(RawListThumbnailFolder)) || _class) || _class);
	exports.default = ListThumbnailFolder;
	exports.RawListThumbnailFolder = RawListThumbnailFolder;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BaseFolderConnectors = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp2;

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BaseFolder = (_temp2 = _class = function (_React$Component) {
	  _inherits(BaseFolder, _React$Component);

	  function BaseFolder() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, BaseFolder);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BaseFolder.__proto__ || Object.getPrototypeOf(BaseFolder)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      newName: _this.props.isDraft ? 'New folder' : _this.getName()
	    }, _this.selectAllNewName = function () {
	      window.requestAnimationFrame(function () {
	        var currentName = _this.refs.newName.value;
	        _this.refs.newName.setSelectionRange(0, currentName.length);
	        _this.refs.newName.focus();
	      });
	    }, _this.handleFolderClick = function (event) {
	      event.stopPropagation();
	      _this.props.browserProps.select(_this.props.fileKey);
	    }, _this.handleFolderDoubleClick = function (event) {
	      event.stopPropagation();
	      _this.toggleFolder();
	    }, _this.handleRenameClick = function (event) {
	      if (!_this.props.browserProps.renameFolder) {
	        return;
	      }
	      _this.props.browserProps.beginAction('rename', _this.props.fileKey);
	    }, _this.handleNewNameChange = function (event) {
	      var newName = _this.refs.newName.value;
	      _this.setState({ newName: newName });
	    }, _this.handleRenameSubmit = function (event) {
	      event.preventDefault();
	      if (!_this.props.browserProps.renameFolder) {
	        return;
	      }
	      var newName = _this.state.newName.trim();
	      if (newName.length === 0) {
	        // todo: move to props handler
	        // window.notify({
	        //   style: 'error',
	        //   title: 'Invalid new folder name',
	        //   body: 'Folder name cannot be blank',
	        // })
	        return;
	      }
	      if (newName.indexOf('/') !== -1) {
	        // todo: move to props handler
	        // window.notify({
	        //   style: 'error',
	        //   title: 'Invalid new folder name',
	        //   body: 'Folder names cannot contain forward slashes.',
	        // })
	        return;
	      }
	      var newKey = _this.props.fileKey.substr(0, _this.props.fileKey.substr(0, _this.props.fileKey.length - 1).lastIndexOf('/'));
	      if (newKey.length) {
	        newKey += '/';
	      }
	      newKey += newName;
	      newKey += '/';
	      if (_this.props.isDraft) {
	        _this.props.browserProps.createFolder(newKey);
	      } else {
	        _this.props.browserProps.renameFolder(_this.props.fileKey, newKey);
	      }
	    }, _this.handleDeleteClick = function (event) {
	      if (!_this.props.browserProps.deleteFolder) {
	        return;
	      }
	      _this.props.browserProps.beginAction('delete', _this.props.fileKey);
	    }, _this.handleDeleteSubmit = function (event) {
	      event.preventDefault();
	      if (!_this.props.browserProps.deleteFolder) {
	        return;
	      }
	      _this.props.browserProps.deleteFolder(_this.props.fileKey);
	    }, _this.handleCancelEdit = function (event) {
	      _this.props.browserProps.endAction();
	    }, _this.toggleFolder = function () {
	      _this.props.browserProps.toggleFolder(_this.props.fileKey);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(BaseFolder, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.isDraft) {
	        this.selectAllNewName();
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(oldProps, oldState) {
	      if (!oldProps.isRenaming && this.props.isRenaming) {
	        this.selectAllNewName();
	      }
	    }
	  }, {
	    key: 'getName',
	    value: function getName() {
	      if (this.props.name) {
	        return this.props.name;
	      }
	      var folders = this.props.fileKey.split('/');
	      return this.props.newName || folders[folders.length - 2];
	    }
	  }, {
	    key: 'connectDND',
	    value: function connectDND(render) {
	      var inAction = this.props.isDragging || this.props.action;
	      if (this.props.keyDerived) {
	        if (typeof this.props.browserProps.moveFolder === 'function' && !inAction && !this.props.isRenaming && !this.props.isDeleting) {
	          render = this.props.connectDragSource(render);
	        }
	        if (typeof this.props.browserProps.createFiles === 'function' || typeof this.props.browserProps.moveFolder === 'function' || typeof this.props.browserProps.moveFile === 'function') {
	          render = this.props.connectDropTarget(render);
	        }
	      }
	      return render;
	    }
	  }]);

	  return BaseFolder;
	}(_react2.default.Component), _class.propTypes = {
	  name: _propTypes2.default.string,
	  fileKey: _propTypes2.default.string,

	  newName: _propTypes2.default.string,
	  keyDerived: _propTypes2.default.bool,
	  isDraft: _propTypes2.default.bool,
	  isRenaming: _propTypes2.default.bool,
	  isDeleting: _propTypes2.default.bool,

	  connectDragSource: _propTypes2.default.func,
	  connectDropTarget: _propTypes2.default.func,
	  isDragging: _propTypes2.default.bool,
	  action: _propTypes2.default.func,

	  browserProps: _propTypes2.default.shape({
	    select: _propTypes2.default.func,
	    toggleFolder: _propTypes2.default.func,
	    beginAction: _propTypes2.default.func,
	    endAction: _propTypes2.default.func,
	    preview: _propTypes2.default.func,

	    createFiles: _propTypes2.default.func,
	    createFolder: _propTypes2.default.func,
	    moveFile: _propTypes2.default.func,
	    moveFolder: _propTypes2.default.func,
	    renameFolder: _propTypes2.default.func,
	    deleteFolder: _propTypes2.default.func
	  })
	}, _temp2);


	var dragSource = {
	  beginDrag: function beginDrag(props) {
	    props.browserProps.select(props.fileKey);
	    return {
	      key: props.fileKey
	    };
	  },
	  endDrag: function endDrag(props, monitor, component) {
	    if (!monitor.didDrop()) {
	      return;
	    }

	    var dropResult = monitor.getDropResult();

	    var fileNameParts = props.fileKey.split('/');
	    var folderName = fileNameParts[fileNameParts.length - 2];

	    var newKey = '' + dropResult.path + folderName + '/';
	    // abort if the new folder name contains itself
	    if (newKey.substr(0, props.fileKey.length) === props.fileKey) return;

	    if (newKey !== props.fileKey && props.browserProps.renameFolder) {
	      props.browserProps.openFolder(dropResult.path);
	      props.browserProps.renameFolder(props.fileKey, newKey);
	    }
	  }
	};

	function dragCollect(connect, monitor) {
	  return {
	    connectDragPreview: connect.dragPreview(),
	    connectDragSource: connect.dragSource(),
	    isDragging: monitor.isDragging()
	  };
	}

	var BaseFolderConnectors = {
	  dragSource: dragSource,
	  dragCollect: dragCollect
	};

	exports.default = BaseFolder;
	exports.BaseFolderConnectors = BaseFolderConnectors;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RawTableFolder = undefined;

	var _dec, _dec2, _class;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(12);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactDnd = __webpack_require__(5);

	var _reactDndHtml5Backend = __webpack_require__(4);

	var _baseFolder = __webpack_require__(23);

	var _baseFolder2 = _interopRequireDefault(_baseFolder);

	var _baseFile = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RawTableFolder = function (_BaseFolder) {
	  _inherits(RawTableFolder, _BaseFolder);

	  function RawTableFolder() {
	    _classCallCheck(this, RawTableFolder);

	    return _possibleConstructorReturn(this, (RawTableFolder.__proto__ || Object.getPrototypeOf(RawTableFolder)).apply(this, arguments));
	  }

	  _createClass(RawTableFolder, [{
	    key: 'render',
	    value: function render() {
	      var icon = void 0;
	      if (this.props.isOpen) {
	        icon = _react2.default.createElement('i', { className: 'fa fa-folder-open-o', 'aria-hidden': 'true' });
	      } else {
	        icon = _react2.default.createElement('i', { className: 'fa fa-folder-o', 'aria-hidden': 'true' });
	      }

	      var inAction = this.props.isDragging || this.props.action;

	      var name = void 0;
	      if (!inAction && this.props.isDeleting) {
	        name = _react2.default.createElement(
	          'form',
	          { className: 'deleting', onSubmit: this.handleDeleteSubmit },
	          _react2.default.createElement(
	            'a',
	            {
	              href: this.props.url,
	              download: 'download',
	              onClick: this.handleFileClick
	            },
	            icon,
	            this.getName()
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'button',
	              { type: 'submit' },
	              'Confirm Deletion'
	            )
	          )
	        );
	      } else if (!inAction && this.props.isRenaming || this.props.isDraft) {
	        name = _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'form',
	            { className: 'renaming', onSubmit: this.handleRenameSubmit },
	            icon,
	            _react2.default.createElement('input', {
	              type: 'text',
	              ref: 'newName',
	              value: this.state.newName,
	              onChange: this.handleNewNameChange,
	              onBlur: this.handleCancelEdit,
	              autoFocus: true
	            })
	          )
	        );
	      } else {
	        name = _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'a',
	            { onClick: this.toggleFolder },
	            icon,
	            this.getName()
	          )
	        );
	      }

	      if (typeof this.props.browserProps.moveFolder === 'function') {
	        name = this.props.connectDragPreview(name);
	      }

	      var folder = _react2.default.createElement(
	        'tr',
	        {
	          className: (0, _classnames2.default)('folder', {
	            pending: this.props.action,
	            dragging: this.props.isDragging,
	            dragover: this.props.isOver,
	            selected: this.props.isSelected
	          }),
	          onClick: this.handleFolderClick,
	          onDoubleClick: this.handleFolderDoubleClick
	        },
	        _react2.default.createElement(
	          'td',
	          { className: 'name' },
	          _react2.default.createElement(
	            'div',
	            { style: { paddingLeft: this.props.depth * 16 + 'px' } },
	            name
	          )
	        ),
	        _react2.default.createElement('td', null),
	        _react2.default.createElement('td', null)
	      );

	      return this.connectDND(folder);
	    }
	  }]);

	  return RawTableFolder;
	}(_baseFolder2.default);

	var TableFolder = (_dec = (0, _reactDnd.DragSource)('folder', _baseFolder.BaseFolderConnectors.dragSource, _baseFolder.BaseFolderConnectors.dragCollect), _dec2 = (0, _reactDnd.DropTarget)(['file', 'folder', _reactDndHtml5Backend.NativeTypes.FILE], _baseFile.BaseFileConnectors.targetSource, _baseFile.BaseFileConnectors.targetCollect), _dec(_class = _dec2(_class = function (_RawTableFolder) {
	  _inherits(TableFolder, _RawTableFolder);

	  function TableFolder() {
	    _classCallCheck(this, TableFolder);

	    return _possibleConstructorReturn(this, (TableFolder.__proto__ || Object.getPrototypeOf(TableFolder)).apply(this, arguments));
	  }

	  return TableFolder;
	}(RawTableFolder)) || _class) || _class);
	exports.default = TableFolder;
	exports.RawTableFolder = RawTableFolder;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GroupByFolder = undefined;

	var _byFolder = __webpack_require__(26);

	var _byFolder2 = _interopRequireDefault(_byFolder);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.GroupByFolder = _byFolder2.default;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = function (files, root) {
	  var fileTree = {
	    contents: [],
	    children: {}
	  };

	  files.map(function (file) {
	    file.relativeKey = (file.newKey || file.key).substr(root.length);
	    var currentFolder = fileTree;
	    var folders = file.relativeKey.split('/');
	    folders.map(function (folder, folderIndex) {
	      if (folderIndex === folders.length - 1 && !file.size) {
	        for (var key in file) {
	          currentFolder[key] = file[key];
	        }
	      }
	      if (folder === '') {
	        return;
	      }
	      var isAFile = file.size && folderIndex === folders.length - 1;
	      if (isAFile) {
	        currentFolder.contents.push(_extends({}, file, {
	          keyDerived: true
	        }));
	      } else {
	        if (folder in currentFolder.children === false) {
	          currentFolder.children[folder] = {
	            contents: [],
	            children: {}
	          };
	        }
	        currentFolder = currentFolder.children[folder];
	      }
	    });
	  });

	  function addAllChildren(level, prefix) {
	    if (prefix !== '') {
	      prefix += '/';
	    }
	    var files = [];
	    for (var folder in level.children) {
	      files.push(_extends({}, level.children[folder], {
	        contents: undefined,
	        keyDerived: true,
	        key: root + prefix + folder + '/',
	        relativeKey: prefix + folder + '/',
	        children: addAllChildren(level.children[folder], prefix + folder),
	        size: 0
	      }));
	    }
	    files = files.concat(level.contents);
	    return files;
	  }

	  files = addAllChildren(fileTree, '');
	  return files;
	};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SortByModified = exports.SortByName = undefined;

	var _byName = __webpack_require__(28);

	var _byName2 = _interopRequireDefault(_byName);

	var _byModified = __webpack_require__(30);

	var _byModified2 = _interopRequireDefault(_byModified);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.SortByName = _byName2.default;
	exports.SortByModified = _byModified2.default;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (files) {
	  return naturalSort(files);
	};

	var _utils = __webpack_require__(29);

	function naturalDraftComparer(a, b) {
	  if (a.draft && !b.draft) {
	    return 1;
	  } else if (b.draft && !a.draft) {
	    return -1;
	  }
	  return (0, _utils.naturalSortComparer)(a, b);
	}

	function naturalSort(allFiles) {
	  var folders = [];
	  var files = [];

	  for (var fileIndex = 0; fileIndex < allFiles.length; fileIndex++) {
	    var file = allFiles[fileIndex];
	    var keyFolders = (file.newKey || file.key).split('/');
	    if (file.children) {
	      if (!file.name) {
	        file.name = keyFolders[keyFolders.length - 2];
	      }
	      folders.push(file);
	    } else {
	      if (!file.name) {
	        file.name = keyFolders[keyFolders.length - 1];
	      }
	      files.push(file);
	    }
	  }

	  files = files.sort(_utils.naturalSortComparer);
	  folders = folders.sort(naturalDraftComparer);

	  for (var folderIndex = 0; folderIndex < folders.length; folderIndex++) {
	    var folder = folders[folderIndex];
	    folder.children = naturalSort(folder.children);
	  }

	  var sortedFiles = [];
	  sortedFiles = sortedFiles.concat(folders);
	  sortedFiles = sortedFiles.concat(files);
	  return sortedFiles;
	}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var NUMBER_GROUPS = /(-?\d*\.?\d+)/g;

	function naturalSortComparer(a, b) {
	  var aa = String(a.name).split(NUMBER_GROUPS);
	  var bb = String(b.name).split(NUMBER_GROUPS);
	  var min = Math.min(aa.length, bb.length);

	  for (var i = 0; i < min; i++) {
	    var x = parseFloat(aa[i]) || aa[i].toLowerCase();
	    var y = parseFloat(bb[i]) || bb[i].toLowerCase();
	    if (x < y) return -1;else if (x > y) return 1;
	  }

	  return 0;
	}

	exports.naturalSortComparer = naturalSortComparer;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (files) {
	  return lastModifiedSort(files);
	};

	var _moment = __webpack_require__(17);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function lastModifiedComparer(a, b) {
	  return +(0, _moment2.default)(a.modified) < +(0, _moment2.default)(b.modified);
	}

	function lastModifiedSort(allFiles) {
	  var folders = [];
	  var files = [];
	  for (var fileIndex = 0; fileIndex < allFiles.length; fileIndex++) {
	    var file = allFiles[fileIndex];
	    var keyFolders = (file.newKey || file.key).split('/');
	    if (file.children) {
	      // file.name = keyFolders[keyFolders.length - 2]
	      folders.push(file);
	    } else {
	      file.name = keyFolders[keyFolders.length - 1];
	      files.push(file);
	    }
	  }

	  files = files.sort(lastModifiedComparer);

	  for (var folderIndex = 0; folderIndex < folders.length; folderIndex++) {
	    var folder = folders[folderIndex];
	    folder.children = lastModifiedSort(folder.children);
	  }

	  var sortedFiles = [];
	  sortedFiles = sortedFiles.concat(folders);
	  sortedFiles = sortedFiles.concat(files);
	  return sortedFiles;
	}

/***/ })
/******/ ])
});
;