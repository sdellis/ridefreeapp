import { shallowMount } from "@vue/test-utils";
import Rides from "@/components/Rides.vue";

describe("Rides.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Rides, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
