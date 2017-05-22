var expect  = require("expect");
var actions = require("actions");

describe("Actions", () => {
  it("should generate searchText actions", () => {
    var action = {
      type: "SET_SEARCH_TEXT",
      searchText: "test text"
    }
    var res = actions.setSearchText(action.searchText)
    expect(res).toEqual(action);
  });
  it("should generate add todo action", () => {
    var action = {
      type: "ADD_TODO",
      text: "todo text"
    }
    var res = actions.addTodo(action.text)
    expect(res).toEqual(action);
  });
  it("should generate toggle show Completed action", () => {
    var action = {
      type: "TOGGLE_SHOW_COMPLETED"
    }
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });
  it("should generate toggle todo action", () => {
    var action = {
      type: "TOGGLE_TODO",
      id: 1
    }
    var res = actions.toggleTodo(action.id)
    expect(res).toEqual(action);
  });
});
