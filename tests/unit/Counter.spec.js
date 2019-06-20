import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
  it("increments count when button is clicked", () => {
    const wrapper = shallowMount(Counter);
    wrapper.find("button").trigger("click");
    wrapper.find("button").trigger("click");
    expect(wrapper.find("div").text()).to.include("2");
  });
});
